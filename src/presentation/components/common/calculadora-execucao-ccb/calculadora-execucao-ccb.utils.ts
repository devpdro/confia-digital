export type PaymentStatus = "nao_pago" | "parcial" | "integral";
export type ResultStatus = PaymentStatus | "parcial-quitada";

export type ParsedInstallment = {
  n: number;
  vencimento: string;
  valor: number;
};

export type ParsedExecutionCCB = {
  formato: "BMP" | "VIA_CAPITAL" | null;
  credor?: string;
  numeroCCB?: string;
  dataEmissao?: string;
  cnpjCredor?: string;
  devedorNome?: string;
  devedorCPF?: string;
  valorPrincipal?: number;
  valorIOF?: number;
  tarifaCadastro?: number;
  valorLiquido?: number;
  taxaJurosAM?: number;
  taxaJurosAA?: number;
  numeroParcelas?: number;
  parcelas: ParsedInstallment[];
  warnings: string[];
};

export type InstallmentInput = {
  id: string;
  vencISO: string;
  valor: string;
  status: PaymentStatus;
  valorPago: string;
  dataPagamento: string;
};

export type CalcInstallment = {
  n: number | string;
  vencDate: Date;
  valor: number;
  status: PaymentStatus;
  dataPagamento: Date | null;
  valorPago: number;
};

export type NegotiationInput = {
  ativa: boolean;
  substitui: boolean;
  valor: number;
  dataAcordo: Date;
  status: PaymentStatus;
  dataPagamento: Date | null;
  valorPago: number;
};

export type CalcParams = {
  dataBase: Date;
  dataVencAntecipado: Date;
  taxaJurosAM: number;
  taxaMoraAM: number;
  multaPct: number;
  honorariosPct: number;
  custasPct: number;
  ufesp: number;
  custasPisoUfesp: number;
  custasTetoUfesp: number;
  taxaIntimacao: number;
  diasMes: number;
};

export type CalcLine = {
  parcela: number | string;
  vencimentoOriginal: Date;
  vencimentoEfetivo: Date;
  status: ResultStatus;
  dataPagamento?: Date | null;
  valorPagoInformado?: number;
  devidoNaQuitacao?: number;
  devidoNaDataPagamento?: number;
  saldoAposPagamento?: number;
  diasAtraso: number;
  fatorCorrecao?: number;
  valorCorrigido: number;
  jurosRemuneratorios: number;
  jurosMora: number;
  subtotal: number;
  multa: number;
  total: number;
};

export type CalcResult = {
  linhas: CalcLine[];
  negocLinha: CalcLine | null;
  totalParcelas: number;
  totalAtualizado: number;
  honorarios: number;
  custas: number;
  custasBrutas: number;
  custasPiso: number;
  custasTeto: number;
  taxaIntimacao: number;
  totalExecucao: number;
  substituiu: boolean;
};

type DateParts = { y: number; mo: number; d: number };
type IpcaRow = {
  ym: number;
  label: string;
  variacao: number;
  estimado?: boolean;
  fatorAcumulado?: number;
};

export const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const parseNumber = (value: unknown): number => {
  if (value === null || value === undefined) return NaN;
  const str = String(value).trim();
  if (!str) return NaN;
  if (str.includes(",") && str.includes(".")) {
    return parseFloat(str.replace(/\./g, "").replace(",", "."));
  }
  if (str.includes(",")) return parseFloat(str.replace(",", "."));
  if (str.includes(".")) {
    const parts = str.split(".");
    if (parts.length === 2 && parts[1].length === 3 && parts[0].length <= 3) {
      return parseFloat(str.replace(/\./g, ""));
    }
  }
  return parseFloat(str);
};

export const parseBRDateParts = (str: string): DateParts | null => {
  const match = /(\d{2})\/(\d{2})\/(\d{4})/.exec(str);
  if (!match) return null;
  return {
    y: parseInt(match[3], 10),
    mo: parseInt(match[2], 10),
    d: parseInt(match[1], 10),
  };
};

export const dateFromParts = (parts: DateParts): Date =>
  new Date(Date.UTC(parts.y, parts.mo - 1, parts.d, 12, 0, 0));

export const dateFromISO = (iso: string): Date | null => {
  const parts = iso.split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return null;
  return dateFromParts({ y: parts[0], mo: parts[1], d: parts[2] });
};

export const todayISO = (): string => {
  const date = new Date();
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
};

export const fmtDateISO = (date: Date): string => {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

export const fmtDateBR = (date?: Date | null): string => {
  if (!date) return "-";
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${d}/${m}/${y}`;
};

export const daysBetween = (d1: Date, d2: Date): number =>
  Math.round((d2.getTime() - d1.getTime()) / 86400000);

const ymOf = (date: Date): number =>
  date.getUTCFullYear() * 100 + date.getUTCMonth() + 1;

const detectFormat = (text: string): ParsedExecutionCCB["formato"] => {
  if (/BMP\s+SOCIEDADE\s+DE\s+CRE?DITO/i.test(text)) return "BMP";
  if (/VIA\s+CAPITAL/i.test(text)) return "VIA_CAPITAL";
  return null;
};

const parseBMP = (text: string): ParsedExecutionCCB => {
  const out: ParsedExecutionCCB = {
    formato: "BMP",
    credor: "BMP Sociedade de Credito Direto S.A.",
    parcelas: [],
    warnings: [],
  };

  let match = /C[ÉE]DULA DE CREDITO[^\n]*\n(\d+)\s+(\d{2}\/\d{2}\/\d{4})/.exec(text);
  if (match) {
    out.numeroCCB = match[1];
    out.dataEmissao = match[2];
  } else {
    out.warnings.push("Numero/data de emissao nao encontrados.");
  }

  match = /CNPJ\/MF sob\s+([\d./-]+)/.exec(text);
  if (match) out.cnpjCredor = match[1];

  match = /Nome CPF\s*\n([A-ZÀ-Úa-zà-ú\s]+?)\s+([\d.]+-\d{2})/.exec(text);
  if (match) {
    out.devedorNome = match[1].trim();
    out.devedorCPF = match[2];
  } else {
    out.warnings.push("Nome/CPF do devedor nao encontrados.");
  }

  match =
    /CARACTER[ÍI]STICAS DA OPERA[ÇC][ÃA]O[\s\S]*?R\$\s*([\d.,]+)\s+R\$\s*([\d.,]+)\s+([\d.,]+)\s+([\d.,]+)/.exec(
      text,
    );
  if (match) {
    out.valorPrincipal = parseNumber(match[1]);
    out.valorIOF = parseNumber(match[2]);
    out.tarifaCadastro = parseNumber(match[3]);
    out.valorLiquido = parseNumber(match[4]);
  }

  match = /(\d{1,2},\d{2})%\s+(\d{1,3},\d{2})%\s+([\d.,]+)\s+([\d.,]+)/.exec(text);
  if (match) {
    out.taxaJurosAM = parseNumber(match[1]);
    out.taxaJurosAA = parseNumber(match[2]);
  } else {
    out.warnings.push("Taxa de juros nao encontrada.");
  }

  match =
    /N[úu]mero de Parcelas[^\n]*\n(\d+)\s+(\d{2}\/\d{2}\/\d{4})\s+(\d{2}\/\d{2}\/\d{4})/.exec(
      text,
    );
  if (match) out.numeroParcelas = parseInt(match[1], 10);

  const fluxoStart = text.search(/FLUXO DE PAGAMENTO/i);
  const condStart = text.search(/CONDI[ÇC][ÕO]ES GERAIS/i);
  if (fluxoStart >= 0) {
    const sec = condStart > fluxoStart ? text.slice(fluxoStart, condStart) : text.slice(fluxoStart);
    const rowRe = /(\d{3})\s+(\d{2}\/\d{2}\/\d{4})\s+(\d+,\d{2})/g;
    const rows: ParsedInstallment[] = [];
    let rowMatch: RegExpExecArray | null;
    while ((rowMatch = rowRe.exec(sec)) !== null) {
      rows.push({
        n: parseInt(rowMatch[1], 10),
        vencimento: rowMatch[2],
        valor: parseNumber(rowMatch[3]),
      });
    }
    out.parcelas = rows.sort((a, b) => a.n - b.n);
  }

  if (out.parcelas.length === 0) {
    out.warnings.push("Fluxo de pagamento nao encontrado. Preencha as parcelas manualmente.");
  }
  return out;
};

const parseViaCapital = (text: string): ParsedExecutionCCB => {
  const out: ParsedExecutionCCB = {
    formato: "VIA_CAPITAL",
    credor: "Via Capital - Sociedade de Credito Direto S/A.",
    parcelas: [],
    warnings: [],
  };

  let match = /C[ÉE]DULA DE CR[ÉE]DITO BANC[ÁA]RIO\s*N[ºo]\s*(\d+)/i.exec(text);
  if (match) out.numeroCCB = match[1];
  else out.warnings.push("Numero da CCB nao encontrado.");

  match = /VIA CAPITAL[^\n]*?CNPJ\s*n[ºo]\.?\s*([\d./-]+)/i.exec(text);
  if (match) out.cnpjCredor = match[1];

  match = /Nome:\s*([^(]+?)\s*\(/.exec(text);
  if (match) out.devedorNome = match[1].trim();
  else out.warnings.push("Nome do devedor nao encontrado.");

  match = /CPF:\s*([\d.-]+)/.exec(text);
  if (match) out.devedorCPF = match[1];

  match = /Valor do Cr[ée]dito:\s*R\$\s*([\d.,]+)/i.exec(text);
  if (match) out.valorPrincipal = parseNumber(match[1]);

  match = /Valor Entregue ao Emitente:\s*R\$\s*([\d.,]+)/i.exec(text);
  if (match) out.valorLiquido = parseNumber(match[1]);

  match = /IOF:\s*R\$\s*([\d.,]+)/i.exec(text);
  if (match) out.valorIOF = parseNumber(match[1]);

  match = /Taxa de Juros % a\.m\.:\s*([\d.,]+)/i.exec(text);
  if (match) out.taxaJurosAM = parseNumber(match[1]);
  else out.warnings.push("Taxa de juros a.m. nao encontrada.");

  match = /Taxa de Juros % a\.a\.:\s*([\d.,]+)/i.exec(text);
  if (match) out.taxaJurosAA = parseNumber(match[1]);

  match = /N[úu]mero de Parcelas:\s*(\d+)/i.exec(text);
  if (match) out.numeroParcelas = parseInt(match[1], 10);

  const fluxoStart = text.search(/FLUXO DE PAGAMENTO/i);
  if (fluxoStart >= 0) {
    const sec = text.slice(fluxoStart);
    const rowRe = /\n(\d{1,2})\s+([\d.,]+)\s+([\d.,]+)\s+R\$\s*([\d.,]+)\s+(\d{2}\/\d{2}\/\d{4})/g;
    const rows: ParsedInstallment[] = [];
    let rowMatch: RegExpExecArray | null;
    while ((rowMatch = rowRe.exec(sec)) !== null) {
      rows.push({
        n: parseInt(rowMatch[1], 10),
        vencimento: rowMatch[5],
        valor: parseNumber(rowMatch[4]),
      });
    }
    out.parcelas = rows.sort((a, b) => a.n - b.n);
  }

  if (out.parcelas.length === 0) {
    out.warnings.push("Fluxo de pagamento nao encontrado. Preencha as parcelas manualmente.");
  }
  return out;
};

export const parseExecutionCCBText = (text: string): ParsedExecutionCCB => {
  const format = detectFormat(text);
  if (format === "BMP") return parseBMP(text);
  if (format === "VIA_CAPITAL") return parseViaCapital(text);
  return {
    formato: null,
    parcelas: [],
    warnings: [
      "Nao foi possivel identificar o credor automaticamente. Modelos reconhecidos: BMP e Via Capital.",
    ],
  };
};

const IPCA_TABLE: IpcaRow[] = [
  { ym: 202512, label: "dez/25", variacao: 0 },
  { ym: 202601, label: "jan/26", variacao: 0.0033 },
  { ym: 202602, label: "fev/26", variacao: 0.007 },
  { ym: 202603, label: "mar/26", variacao: 0.0088 },
  { ym: 202604, label: "abr/26", variacao: 0.0067 },
  { ym: 202605, label: "mai/26", variacao: 0.0058 },
  { ym: 202606, label: "jun/26", variacao: 0.0058, estimado: true },
  { ym: 202607, label: "jul/26", variacao: 0, estimado: true },
  { ym: 202608, label: "ago/26", variacao: 0, estimado: true },
  { ym: 202609, label: "set/26", variacao: 0, estimado: true },
  { ym: 202610, label: "out/26", variacao: 0, estimado: true },
  { ym: 202611, label: "nov/26", variacao: 0, estimado: true },
  { ym: 202612, label: "dez/26", variacao: 0, estimado: true },
  { ym: 202701, label: "jan/27", variacao: 0, estimado: true },
  { ym: 202702, label: "fev/27", variacao: 0, estimado: true },
  { ym: 202703, label: "mar/27", variacao: 0, estimado: true },
];

let accumulated = 1;
for (const row of IPCA_TABLE) {
  accumulated *= 1 + row.variacao;
  row.fatorAcumulado = accumulated;
}

const fatorIndice = (ym: number): number | null =>
  IPCA_TABLE.find((row) => row.ym === ym)?.fatorAcumulado ?? null;

const acumular = (base: number, dataIni: Date, dataFim: Date, params: CalcParams) => {
  const dias = Math.max(0, daysBetween(dataIni, dataFim));
  const fIni = fatorIndice(ymOf(dataIni));
  const fFim = fatorIndice(ymOf(dataFim));
  const fatorCorrecao = fIni && fFim ? fFim / fIni : 1;
  const valorCorrigido = base * fatorCorrecao;
  const jurosRemuneratorios =
    valorCorrigido * (Math.pow(1 + params.taxaJurosAM, dias / params.diasMes) - 1);
  const jurosMora = valorCorrigido * params.taxaMoraAM * (dias / params.diasMes);
  return {
    dias,
    fatorCorrecao,
    valorCorrigido,
    jurosRemuneratorios,
    jurosMora,
    subtotal: valorCorrigido + jurosRemuneratorios + jurosMora,
  };
};

const calcParcela = (p: CalcInstallment, params: CalcParams): CalcLine => {
  const vencEfetivo = p.vencDate < params.dataVencAntecipado ? p.vencDate : params.dataVencAntecipado;

  if (p.status === "integral") {
    const per1 = acumular(p.valor, vencEfetivo, p.dataPagamento || params.dataBase, params);
    return {
      parcela: p.n,
      vencimentoOriginal: p.vencDate,
      vencimentoEfetivo: vencEfetivo,
      status: "integral",
      dataPagamento: p.dataPagamento,
      valorPagoInformado: p.valorPago,
      devidoNaQuitacao: per1.subtotal,
      valorCorrigido: 0,
      jurosRemuneratorios: 0,
      jurosMora: 0,
      subtotal: 0,
      multa: 0,
      total: 0,
      diasAtraso: 0,
    };
  }

  if (p.status === "parcial") {
    const dataPagamento = p.dataPagamento || params.dataBase;
    const per1 = acumular(p.valor, vencEfetivo, dataPagamento, params);
    const devidoNaDataPagamento = per1.subtotal;
    const saldoAposPagamento = Math.max(0, devidoNaDataPagamento - (p.valorPago || 0));
    if (saldoAposPagamento <= 0.005) {
      return {
        parcela: p.n,
        vencimentoOriginal: p.vencDate,
        vencimentoEfetivo: vencEfetivo,
        status: "parcial-quitada",
        dataPagamento,
        valorPagoInformado: p.valorPago,
        devidoNaDataPagamento,
        valorCorrigido: 0,
        jurosRemuneratorios: 0,
        jurosMora: 0,
        subtotal: 0,
        multa: 0,
        total: 0,
        diasAtraso: 0,
      };
    }
    const per2 = acumular(saldoAposPagamento, dataPagamento, params.dataBase, params);
    const multa = per2.subtotal * params.multaPct;
    return {
      parcela: p.n,
      vencimentoOriginal: p.vencDate,
      vencimentoEfetivo: vencEfetivo,
      status: "parcial",
      dataPagamento,
      valorPagoInformado: p.valorPago,
      devidoNaDataPagamento,
      saldoAposPagamento,
      diasAtraso: per2.dias,
      fatorCorrecao: per2.fatorCorrecao,
      valorCorrigido: per2.valorCorrigido,
      jurosRemuneratorios: per2.jurosRemuneratorios,
      jurosMora: per2.jurosMora,
      subtotal: per2.subtotal,
      multa,
      total: per2.subtotal + multa,
    };
  }

  const per = acumular(p.valor, vencEfetivo, params.dataBase, params);
  const multa = per.subtotal * params.multaPct;
  return {
    parcela: p.n,
    vencimentoOriginal: p.vencDate,
    vencimentoEfetivo: vencEfetivo,
    status: "nao_pago",
    diasAtraso: per.dias,
    fatorCorrecao: per.fatorCorrecao,
    valorCorrigido: per.valorCorrigido,
    jurosRemuneratorios: per.jurosRemuneratorios,
    jurosMora: per.jurosMora,
    subtotal: per.subtotal,
    multa,
    total: per.subtotal + multa,
  };
};

export const calcularExecucaoCCB = (
  parcelas: CalcInstallment[],
  negociacao: NegotiationInput | null,
  params: CalcParams,
): CalcResult => {
  const linhas = parcelas.map((p) => calcParcela(p, params));
  const totalParcelas = linhas.reduce((sum, line) => sum + line.total, 0);
  let negocLinha: CalcLine | null = null;
  let totalAtualizado = totalParcelas;

  if (negociacao?.ativa) {
    negocLinha = calcParcela(
      {
        n: "NEG",
        vencDate: negociacao.dataAcordo,
        valor: negociacao.valor,
        status: negociacao.status,
        dataPagamento: negociacao.dataPagamento,
        valorPago: negociacao.valorPago,
      },
      params,
    );
    totalAtualizado = negociacao.substitui ? negocLinha.total : totalParcelas + negocLinha.total;
  }

  const honorarios = totalAtualizado * params.honorariosPct;
  const custasBrutas = totalAtualizado * params.custasPct;
  const custasPiso = params.custasPisoUfesp * params.ufesp;
  const custasTeto = params.custasTetoUfesp * params.ufesp;
  const custas = [custasBrutas, custasPiso, custasTeto].sort((a, b) => a - b)[1];
  const taxaIntimacao = params.taxaIntimacao;
  const totalExecucao = totalAtualizado + honorarios + custas + taxaIntimacao;

  return {
    linhas,
    negocLinha,
    totalParcelas,
    totalAtualizado,
    honorarios,
    custas,
    custasBrutas,
    custasPiso,
    custasTeto,
    taxaIntimacao,
    totalExecucao,
    substituiu: Boolean(negociacao?.ativa && negociacao.substitui),
  };
};

export const installmentFromParsed = (
  parcela: ParsedInstallment,
  index: number,
): InstallmentInput => {
  const parts = parseBRDateParts(parcela.vencimento);
  return {
    id: `${Date.now()}-${index}`,
    vencISO: parts ? fmtDateISO(dateFromParts(parts)) : "",
    valor: Number.isFinite(parcela.valor) ? parcela.valor.toFixed(2) : "",
    status: "nao_pago",
    valorPago: "",
    dataPagamento: "",
  };
};

export const emptyInstallment = (index: number): InstallmentInput => ({
  id: `${Date.now()}-${index}`,
  vencISO: "",
  valor: "",
  status: "nao_pago",
  valorPago: "",
  dataPagamento: "",
});
