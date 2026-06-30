"use client";

import { type ChangeEvent, type DragEvent, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  Calculator,
  CheckCircle2,
  FileText,
  Plus,
  RotateCcw,
  Trash2,
  Upload,
} from "lucide-react";

import { Button } from "src/presentation/components";

import {
  BRL,
  calcularExecucaoCCB,
  dateFromISO,
  emptyInstallment,
  fmtDateBR,
  installmentFromParsed,
  parseExecutionCCBText,
  parseNumber,
  todayISO,
  type CalcInstallment,
  type CalcParams,
  type CalcResult,
  type InstallmentInput,
  type PaymentStatus,
} from "./calculadora-execucao-ccb.utils";
import S from "./calculadora-execucao-ccb.module.scss";

type PdfJsTextItem = { str: string; transform: number[] };
type PdfJsTextContent = { items: PdfJsTextItem[] };
type PdfJsPage = { getTextContent: () => Promise<PdfJsTextContent> };
type PdfJsDocument = {
  numPages: number;
  getPage: (n: number) => Promise<PdfJsPage>;
};
type PdfJsLib = {
  GlobalWorkerOptions: { workerSrc: string };
  getDocument: (opts: { data: ArrayBuffer }) => { promise: Promise<PdfJsDocument> };
};

type ImportStatus = {
  kind: "idle" | "ok" | "error" | "loading" | "warning";
  message: string;
};

const VIEWPORT = { once: true, margin: "-80px" } as const;
const fadeUp = (delay = 0, y = 18) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});
const stagger = (delayChildren = 0.05) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT,
  transition: { staggerChildren: 0.05, delayChildren },
});

const DEFAULT_PARAMS = {
  dataBase: todayISO(),
  vencAntecipado: todayISO(),
  taxaMora: "1.00",
  multa: "2.00",
  honorarios: "10.00",
  custasPct: "2.00",
  ufesp: "38.42",
  custasPiso: "5",
  custasTeto: "3000",
  taxaIntimacao: "34.35",
};

const CalculadoraExecucaoCcb = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [doc, setDoc] = useState({
    numeroCCB: "",
    credor: "",
    devedor: "",
    cpf: "",
    taxaJuros: "",
  });
  const [parcelas, setParcelas] = useState<InstallmentInput[]>([emptyInstallment(0)]);
  const [params, setParams] = useState(DEFAULT_PARAMS);
  const [neg, setNeg] = useState({
    ativa: false,
    valor: "",
    dataAcordo: todayISO(),
    status: "nao_pago" as PaymentStatus,
    valorPago: "",
    dataPagamento: "",
    substitui: false,
  });
  const [rawText, setRawText] = useState("");
  const [status, setStatus] = useState<ImportStatus>({ kind: "idle", message: "" });
  const [result, setResult] = useState<CalcResult | null>(null);

  const parsedParcelas = useMemo(() => {
    return parcelas
      .map<CalcInstallment | null>((parcela, index) => {
        const vencDate = dateFromISO(parcela.vencISO);
        const valor = parseNumber(parcela.valor);
        const dataPagamento = dateFromISO(parcela.dataPagamento);
        if (!vencDate || !Number.isFinite(valor)) return null;
        return {
          n: index + 1,
          vencDate,
          valor,
          status: parcela.status,
          dataPagamento,
          valorPago: parseNumber(parcela.valorPago) || 0,
        };
      })
      .filter(Boolean) as CalcInstallment[];
  }, [parcelas]);

  const updateDoc = (key: keyof typeof doc, value: string) => {
    setDoc((current) => ({ ...current, [key]: value }));
  };

  const updateParam = (key: keyof typeof params, value: string) => {
    setParams((current) => ({ ...current, [key]: value }));
  };

  const updateParcela = (id: string, patch: Partial<InstallmentInput>) => {
    setParcelas((current) =>
      current.map((parcela) => (parcela.id === id ? { ...parcela, ...patch } : parcela)),
    );
  };

  const addParcela = () => {
    setParcelas((current) => [...current, emptyInstallment(current.length)]);
  };

  const removeParcela = (id: string) => {
    setParcelas((current) =>
      current.length === 1 ? [emptyInstallment(0)] : current.filter((parcela) => parcela.id !== id),
    );
  };

  const resetAll = () => {
    setDoc({ numeroCCB: "", credor: "", devedor: "", cpf: "", taxaJuros: "" });
    setParcelas([emptyInstallment(0)]);
    setParams({ ...DEFAULT_PARAMS, dataBase: todayISO(), vencAntecipado: todayISO() });
    setNeg({
      ativa: false,
      valor: "",
      dataAcordo: todayISO(),
      status: "nao_pago",
      valorPago: "",
      dataPagamento: "",
      substitui: false,
    });
    setRawText("");
    setResult(null);
    setStatus({ kind: "idle", message: "" });
  };

  const buildParams = (): CalcParams | null => {
    const dataBase = dateFromISO(params.dataBase);
    const dataVencAntecipado = dateFromISO(params.vencAntecipado);
    if (!dataBase || !dataVencAntecipado) return null;
    return {
      dataBase,
      dataVencAntecipado,
      taxaJurosAM: (parseNumber(doc.taxaJuros) || 0) / 100,
      taxaMoraAM: (parseNumber(params.taxaMora) || 0) / 100,
      multaPct: (parseNumber(params.multa) || 0) / 100,
      honorariosPct: (parseNumber(params.honorarios) || 0) / 100,
      custasPct: (parseNumber(params.custasPct) || 0) / 100,
      ufesp: parseNumber(params.ufesp) || 0,
      custasPisoUfesp: parseNumber(params.custasPiso) || 0,
      custasTetoUfesp: parseNumber(params.custasTeto) || 0,
      taxaIntimacao: parseNumber(params.taxaIntimacao) || 0,
      diasMes: 30,
    };
  };

  const handleCalculate = () => {
    if (parsedParcelas.length === 0) {
      setStatus({
        kind: "warning",
        message: "Inclua ao menos uma parcela com vencimento e valor antes de calcular.",
      });
      return;
    }
    const invalidPayment = parsedParcelas.find(
      (parcela) =>
        (parcela.status === "parcial" && (!parcela.dataPagamento || !parcela.valorPago)) ||
        (parcela.status === "integral" && !parcela.dataPagamento),
    );
    if (invalidPayment) {
      setStatus({
        kind: "warning",
        message: `Parcela ${invalidPayment.n}: confira valor pago e data do pagamento.`,
      });
      return;
    }
    const calcParams = buildParams();
    if (!calcParams) {
      setStatus({ kind: "warning", message: "Confira as datas dos parametros do calculo." });
      return;
    }

    const dataAcordo = dateFromISO(neg.dataAcordo) || calcParams.dataBase;
    const dataPagamento = dateFromISO(neg.dataPagamento);
    const negociacao = neg.ativa
      ? {
          ativa: true,
          substitui: neg.substitui,
          valor: parseNumber(neg.valor) || 0,
          dataAcordo,
          status: neg.status,
          dataPagamento,
          valorPago: parseNumber(neg.valorPago) || 0,
        }
      : null;

    if (negociacao?.ativa && !negociacao.valor) {
      setStatus({ kind: "warning", message: "Informe o valor negociado do acordo." });
      return;
    }

    setResult(calcularExecucaoCCB(parsedParcelas, negociacao, calcParams));
    setStatus({ kind: "ok", message: "Memoria de calculo atualizada." });
    setTimeout(() => {
      document.getElementById("execucao-ccb-resultado")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const applyParsedText = (text: string) => {
    const parsed = parseExecutionCCBText(text);
    setDoc({
      numeroCCB: parsed.numeroCCB || "",
      credor: parsed.credor || "",
      devedor: parsed.devedorNome || "",
      cpf: parsed.devedorCPF || "",
      taxaJuros: Number.isFinite(parsed.taxaJurosAM) ? String(parsed.taxaJurosAM) : "",
    });
    setParcelas(
      parsed.parcelas.length
        ? parsed.parcelas.map(installmentFromParsed)
        : [emptyInstallment(0)],
    );
    setRawText(text);
    setResult(null);
    const label = parsed.formato === "BMP" ? "BMP Sociedade de Credito Direto" : "Via Capital SCD";
    setStatus({
      kind: parsed.formato ? "ok" : "warning",
      message: parsed.formato
        ? `${parsed.parcelas.length} parcela(s) lida(s) - ${label}. Confira os dados antes de calcular.`
        : "Formato nao reconhecido. Preencha os dados manualmente.",
    });
  };

  const handleFile = async (file?: File) => {
    if (!file) return;
    try {
      setStatus({ kind: "loading", message: `Lendo ${file.name}...` });
      await loadPdfJs();
      const text = await extractPdfText(file);
      applyParsedText(text);
    } catch {
      setStatus({
        kind: "error",
        message: "Nao consegui ler o PDF. Preencha os campos manualmente.",
      });
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleFile(event.dataTransfer.files?.[0]);
  };

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0]);
    event.target.value = "";
  };

  const calcParams = buildParams();
  const quitadasCount = result?.linhas.filter(
    (line) => line.status === "integral" || line.status === "parcial-quitada",
  ).length;
  const parciaisCount = result?.linhas.filter((line) => line.status === "parcial").length;

  return (
    <section className={S.section}>
      <div className={S.container}>
        <motion.header className={S.header} {...stagger(0)}>
          <motion.span className={S.eyebrow} {...fadeUp(0, 12)}>
            <FileText size={13} strokeWidth={2.2} />
            Memoria de calculo CCB
          </motion.span>
          <motion.h1 className={S.title} {...fadeUp(0.08)}>
            Calculo de debito atualizado para <em>execucao de CCB</em>
          </motion.h1>
          <motion.p className={S.subtitle} {...fadeUp(0.16)}>
            Anexe a Cedula de Credito Bancario em PDF ou preencha os dados
            manualmente para montar a memoria com correcao, juros, mora, multa,
            honorarios, custas e taxa de intimacao.
          </motion.p>
        </motion.header>

        <motion.div className={S.card} {...fadeUp(0.05)}>
          <div className={S.cardHead}>
            <span className={S.cardIdx}>01</span>
            <h2>Anexar CCB</h2>
            <span>Modelos BMP e Via Capital</span>
          </div>
          <div
            className={S.dropzone}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
            role="button"
            tabIndex={0}
          >
            <div className={S.dropIcon}>
              <Upload size={24} strokeWidth={2.2} />
            </div>
            <div>
              <strong>Arraste o PDF aqui, ou clique para escolher</strong>
              <p>O leitor tenta reconhecer credor, devedor, taxa e fluxo de pagamento.</p>
            </div>
            <button type="button">Anexar CCB</button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            hidden
            onChange={handleFileInput}
          />
          <StatusPill status={status} />
        </motion.div>

        <motion.div className={S.card} {...fadeUp(0.08)}>
          <div className={S.cardHead}>
            <span className={S.cardIdx}>02</span>
            <h2>Conferir dados extraidos</h2>
            <span>Tudo aqui e editavel</span>
          </div>
          <div className={S.grid}>
            <Field label="Numero da CCB" value={doc.numeroCCB} onChange={(v) => updateDoc("numeroCCB", v)} />
            <Field label="Credor" value={doc.credor} onChange={(v) => updateDoc("credor", v)} />
            <Field label="Devedor" value={doc.devedor} onChange={(v) => updateDoc("devedor", v)} />
            <Field label="CPF do devedor" value={doc.cpf} onChange={(v) => updateDoc("cpf", v)} />
            <Field
              label="Juros remuneratorios"
              hint="% a.m."
              type="number"
              value={doc.taxaJuros}
              onChange={(v) => updateDoc("taxaJuros", v)}
              step="0.01"
            />
          </div>

          <div className={S.parcelasHead}>
            <h3>Parcelas</h3>
            <button type="button" onClick={addParcela}>
              <Plus size={16} /> Adicionar parcela
            </button>
          </div>
          <div className={S.parcelaList}>
            {parcelas.map((parcela, index) => (
              <div className={S.parcelaRow} key={parcela.id}>
                <span className={S.parcelaBadge}>{String(index + 1).padStart(2, "0")}</span>
                <Field
                  label="Vencimento"
                  type="date"
                  value={parcela.vencISO}
                  onChange={(v) => updateParcela(parcela.id, { vencISO: v })}
                />
                <Field
                  label="Valor"
                  type="number"
                  value={parcela.valor}
                  onChange={(v) => updateParcela(parcela.id, { valor: v })}
                  step="0.01"
                />
                <SelectStatus
                  value={parcela.status}
                  onChange={(value) =>
                    updateParcela(parcela.id, {
                      status: value,
                      valorPago: value === "integral" ? "" : parcela.valorPago,
                    })
                  }
                />
                {parcela.status !== "nao_pago" && (
                  <>
                    {parcela.status === "parcial" && (
                      <Field
                        label="Valor pago"
                        type="number"
                        value={parcela.valorPago}
                        onChange={(v) => updateParcela(parcela.id, { valorPago: v })}
                        step="0.01"
                      />
                    )}
                    <Field
                      label="Data pagamento"
                      type="date"
                      value={parcela.dataPagamento}
                      onChange={(v) => updateParcela(parcela.id, { dataPagamento: v })}
                    />
                  </>
                )}
                <button
                  type="button"
                  className={S.iconButton}
                  aria-label="Remover parcela"
                  onClick={() => removeParcela(parcela.id)}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>

          <label className={S.negToggle}>
            <input
              type="checkbox"
              checked={neg.ativa}
              onChange={(event) => setNeg((current) => ({ ...current, ativa: event.target.checked }))}
            />
            <span>
              <b>Houve negociacao ou acordo sobre este debito?</b>
              <small>Registre quando houver pagamento parcial, integral ou acordo substitutivo.</small>
            </span>
          </label>

          <AnimatePresence>
            {neg.ativa && (
              <motion.div
                className={S.negBody}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className={S.grid}>
                  <Field label="Valor negociado" type="number" value={neg.valor} onChange={(v) => setNeg((c) => ({ ...c, valor: v }))} step="0.01" />
                  <Field label="Data do acordo" type="date" value={neg.dataAcordo} onChange={(v) => setNeg((c) => ({ ...c, dataAcordo: v }))} />
                  <SelectStatus value={neg.status} onChange={(v) => setNeg((c) => ({ ...c, status: v }))} />
                  {neg.status === "parcial" && (
                    <Field label="Valor pago" type="number" value={neg.valorPago} onChange={(v) => setNeg((c) => ({ ...c, valorPago: v }))} step="0.01" />
                  )}
                  {neg.status !== "nao_pago" && (
                    <Field label="Data pagamento" type="date" value={neg.dataPagamento} onChange={(v) => setNeg((c) => ({ ...c, dataPagamento: v }))} />
                  )}
                </div>
                <label className={S.inlineCheck}>
                  <input
                    type="checkbox"
                    checked={neg.substitui}
                    onChange={(event) => setNeg((current) => ({ ...current, substitui: event.target.checked }))}
                  />
                  Esta negociacao substitui o calculo das parcelas acima
                </label>
              </motion.div>
            )}
          </AnimatePresence>

          {rawText && (
            <details className={S.raw}>
              <summary>Ver texto bruto extraido do PDF</summary>
              <pre>{rawText}</pre>
            </details>
          )}
        </motion.div>

        <motion.div className={S.card} {...fadeUp(0.1)}>
          <div className={S.cardHead}>
            <span className={S.cardIdx}>03</span>
            <h2>Parametros do calculo</h2>
            <span>Percentuais e custas editaveis</span>
          </div>
          <div className={S.grid}>
            <Field label="Data-base" type="date" value={params.dataBase} onChange={(v) => updateParam("dataBase", v)} />
            <Field label="Vencimento antecipado" type="date" value={params.vencAntecipado} onChange={(v) => updateParam("vencAntecipado", v)} />
            <Field label="Juros de mora" hint="% a.m." type="number" value={params.taxaMora} onChange={(v) => updateParam("taxaMora", v)} step="0.01" />
            <Field label="Multa contratual" hint="%" type="number" value={params.multa} onChange={(v) => updateParam("multa", v)} step="0.01" />
            <Field label="Honorarios" hint="%" type="number" value={params.honorarios} onChange={(v) => updateParam("honorarios", v)} step="0.01" />
            <Field label="Custas distribuicao" hint="%" type="number" value={params.custasPct} onChange={(v) => updateParam("custasPct", v)} step="0.01" />
            <Field label="UFESP vigente" type="number" value={params.ufesp} onChange={(v) => updateParam("ufesp", v)} step="0.01" />
            <Field label="Piso custas" hint="UFESP" type="number" value={params.custasPiso} onChange={(v) => updateParam("custasPiso", v)} />
            <Field label="Teto custas" hint="UFESP" type="number" value={params.custasTeto} onChange={(v) => updateParam("custasTeto", v)} />
            <Field label="Taxa intimacao" type="number" value={params.taxaIntimacao} onChange={(v) => updateParam("taxaIntimacao", v)} step="0.01" />
          </div>
          <div className={S.actions}>
            <Button
              typeStyle="btn1"
              label="Calcular memoria"
              size="md"
              onClick={handleCalculate}
              icon={<Calculator size={18} strokeWidth={2.2} />}
            />
            <Button
              typeStyle="btn3"
              label="Zerar dados"
              size="md"
              onClick={resetAll}
              icon={<RotateCcw size={16} strokeWidth={2.2} />}
            />
          </div>
        </motion.div>

        <AnimatePresence>
          {result && (
            <motion.div
              id="execucao-ccb-resultado"
              className={`${S.card} ${S.resultCard}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className={S.cardHead}>
                <span className={S.cardIdx}>04</span>
                <h2>Resultado</h2>
                <span>Memoria de calculo parcela a parcela</span>
              </div>
              <div className={S.summary}>
                <SummaryItem label="Debito atualizado" value={BRL.format(result.totalAtualizado)} />
                <SummaryItem label="Honorarios" value={BRL.format(result.honorarios)} />
                <SummaryItem label="Custas" value={BRL.format(result.custas)} />
                <SummaryItem label="Taxa intimacao" value={BRL.format(result.taxaIntimacao)} />
                <SummaryItem label="Total para execucao" value={BRL.format(result.totalExecucao)} highlight />
              </div>
              <div className={S.tableScroll}>
                <table className={S.table}>
                  <thead>
                    <tr>
                      <th>Parcela</th>
                      <th>Vencimento</th>
                      <th>Dias</th>
                      <th>Corrigido</th>
                      <th>Juros</th>
                      <th>Mora</th>
                      <th>Multa</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...result.linhas, ...(result.negocLinha ? [result.negocLinha] : [])].map((line) => (
                      <tr key={`${line.parcela}-${line.vencimentoOriginal.toISOString()}`}>
                        <td>
                          <b>{line.parcela === "NEG" ? "Negociacao" : String(line.parcela).padStart(2, "0")}</b>
                          {line.status !== "nao_pago" && <span className={S.statusTag}>{statusLabel(line.status)}</span>}
                        </td>
                        <td>{fmtDateBR(line.vencimentoOriginal)}</td>
                        <td>{line.diasAtraso}</td>
                        <td>{BRL.format(line.valorCorrigido)}</td>
                        <td>{BRL.format(line.jurosRemuneratorios)}</td>
                        <td>{BRL.format(line.jurosMora)}</td>
                        <td>{BRL.format(line.multa)}</td>
                        <td><b>{BRL.format(line.total)}</b></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={S.notes}>
                <b>Metodologia:</b> correcao monetaria pelo IPCA, juros
                remuneratorios capitalizados pro-rata, mora simples de{" "}
                {(((calcParams?.taxaMoraAM || 0) * 100)).toFixed(2)}% a.m. e
                multa unica de {(((calcParams?.multaPct || 0) * 100)).toFixed(2)}%.
                Pagamentos parciais abatem primeiro encargos vencidos e depois capital.
                {quitadasCount ? ` ${quitadasCount} parcela(s) quitada(s) foram excluidas do saldo.` : ""}
                {parciaisCount ? ` ${parciaisCount} parcela(s) tiveram saldo recalculado apos pagamento parcial.` : ""}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CalculadoraExecucaoCcb;

const Field = ({
  label,
  hint,
  type = "text",
  value,
  onChange,
  step,
}: {
  label: string;
  hint?: string;
  type?: "text" | "number" | "date";
  value: string;
  onChange: (value: string) => void;
  step?: string;
}) => (
  <label className={S.field}>
    <span>
      {label}
      {hint && <small> {hint}</small>}
    </span>
    <input
      type={type}
      inputMode={type === "number" ? "decimal" : undefined}
      step={step}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);

const SelectStatus = ({
  value,
  onChange,
}: {
  value: PaymentStatus;
  onChange: (value: PaymentStatus) => void;
}) => (
  <label className={S.field}>
    <span>Status</span>
    <select value={value} onChange={(event) => onChange(event.target.value as PaymentStatus)}>
      <option value="nao_pago">Nao pago</option>
      <option value="parcial">Pago parcialmente</option>
      <option value="integral">Pago integralmente</option>
    </select>
  </label>
);

const StatusPill = ({ status }: { status: ImportStatus }) => {
  if (!status.message) return null;
  const Icon = status.kind === "ok" ? CheckCircle2 : status.kind === "loading" ? Upload : AlertCircle;
  return (
    <div className={`${S.statusPill} ${S[status.kind]}`}>
      <Icon size={15} strokeWidth={2.2} />
      {status.message}
    </div>
  );
};

const SummaryItem = ({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => (
  <div className={`${S.summaryItem} ${highlight ? S.highlight : ""}`}>
    <span>{label}</span>
    <b>{value}</b>
  </div>
);

const statusLabel = (status: string) =>
  ({
    parcial: "Parcial",
    integral: "Quitada",
    "parcial-quitada": "Quitada",
  }[status] || "");

const PDFJS_SCRIPT_ID = "pdfjs-execucao-script";

async function loadPdfJs(): Promise<void> {
  if (typeof document === "undefined") return;
  const global = window as unknown as { pdfjsLib?: PdfJsLib };
  if (global.pdfjsLib) return;

  const existing = document.getElementById(PDFJS_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    await new Promise<void>((resolve) => existing.addEventListener("load", () => resolve(), { once: true }));
    return;
  }

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = PDFJS_SCRIPT_ID;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("pdfjs load failed"));
    document.head.appendChild(script);
  });
  global.pdfjsLib!.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

async function extractPdfText(file: File): Promise<string> {
  const pdfjsLib = (window as unknown as { pdfjsLib: PdfJsLib }).pdfjsLib;
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  let fullText = "";
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const items = content.items
      .filter((item) => item.str?.trim())
      .map((item) => ({ str: item.str, x: item.transform[4], y: item.transform[5] }))
      .sort((a, b) => b.y - a.y || a.x - b.x);

    const lines: Array<typeof items> = [];
    let current: typeof items = [];
    let currentY: number | null = null;
    for (const item of items) {
      if (currentY === null || Math.abs(item.y - currentY) <= 3) {
        current.push(item);
        currentY = currentY ?? item.y;
      } else {
        lines.push(current);
        current = [item];
        currentY = item.y;
      }
    }
    if (current.length) lines.push(current);
    for (const line of lines) {
      fullText += `${line.sort((a, b) => a.x - b.x).map((item) => item.str).join(" ").replace(/\s+/g, " ").trim()}\n`;
    }
  }
  return fullText;
}
