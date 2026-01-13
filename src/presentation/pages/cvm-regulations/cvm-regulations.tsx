import { Meta, LegalPageSection } from "src/presentation/components";

import S from 'src/presentation/styles/shared/legal-page.module.scss';

const CvmRegulations = () => {
    return (
        <>
            <Meta
                title="Regulamentações CVM | Confia Capital"
                description="Regulamentações da CVM que regem as atividades da Confia Capital Securitizadora. Marco regulatório da securitização no Brasil."
                keywords="regulamentações CVM, securitização, Lei 9.514/97, Instrução CVM 414/04, CRI, CRA, compliance"
            />
            <div className={S.page}>
                <div className={S.container}>
                    <main className={S.content}>
                        <header className={S.header}>
                            <h1 className={S.title}>Regulamentações CVM</h1>
                        </header>

                        <LegalPageSection
                            id="introducao"
                            number={1}
                            title="INTRODUÇÃO"
                            defaultExpanded={true}
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        A <strong>Confia Capital Securitizadora S.A.</strong> opera em conformidade com as regulamentações da <strong>Comissão de Valores Mobiliários (CVM)</strong>, seguindo rigorosamente todas as normas aplicáveis às operações de securitização de recebíveis no mercado de capitais brasileiro.
                                    </p>
                                    <p className={S.paragraph}>
                                        Este documento apresenta o arcabouço regulatório que rege nossas atividades, demonstrando nosso compromisso com a transparência, proteção aos investidores e integridade do mercado de capitais.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="marco-regulatorio"
                            number={2}
                            title="MARCO REGULATÓRIO DA SECURITIZAÇÃO"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Nossas operações são regidas pela <strong>Lei nº 9.514/97</strong> (Lei do SFI), <strong>Instrução CVM nº 414/04</strong> (registro de companhias securitizadoras), <strong>Instrução CVM nº 476/09</strong> (ofertas públicas com esforços restritos) e <strong>Resolução CVM nº 30/21</strong> (sandbox regulatório). Também observamos as diretrizes do <strong>Conselho Monetário Nacional (CMN)</strong> e <strong>Banco Central do Brasil (BACEN)</strong>.
                                    </p>
                                    <p className={S.paragraph}>
                                        Mantemos registro atualizado junto aos órgãos competentes e cumprimos integralmente as obrigações de prestação de informações, incluindo demonstrações financeiras auditadas, relatórios de atividades e comunicações de fatos relevantes conforme cronograma regulatório.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="estruturacao-cri-cra"
                            number={3}
                            title="ESTRUTURAÇÃO DE OPERAÇÕES CRI E CRA"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Estruturamos <strong>Certificados de Recebíveis Imobiliários (CRI)</strong> e <strong>Certificados de Recebíveis do Agronegócio (CRA)</strong> em conformidade com as Instruções CVM nº 414/04 e 600/18. Todas as operações passam por rigoroso processo de due diligence, incluindo análise de crédito dos sacados, avaliação da dispersão da carteira, verificação da documentação dos recebíveis e estruturação jurídica adequada.
                                    </p>
                                    <p className={S.paragraph}>
                                        Garantimos a <strong>segregação patrimonial</strong> através de patrimônio separado, assegurando que os recebíveis cedidos não se confundam com o patrimônio da securitizadora. Utilizamos agentes fiduciários independentes e mantemos contas centralizadoras para maior transparência e proteção aos investidores, conforme exigido pela regulamentação.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="compliance-riscos"
                            number={4}
                            title="COMPLIANCE E GESTÃO DE RISCOS"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Mantemos estrutura robusta de <strong>compliance</strong> com políticas de prevenção à lavagem de dinheiro (PLD), combate ao financiamento do terrorismo (CFT) e programa de integridade corporativa. Nossa equipe é certificada e treinada regularmente sobre as regulamentações CVM, BACEN e demais normas aplicáveis ao mercado de capitais.
                                    </p>
                                    <p className={S.paragraph}>
                                        Implementamos sistema integrado de <strong>gestão de riscos</strong> abrangendo risco de crédito, mercado, liquidez e operacional. Utilizamos modelos quantitativos para precificação, stress testing e monitoramento contínuo das carteiras, com relatórios periódicos aos órgãos reguladores e comitês internos de risco.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="transparencia"
                            number={5}
                            title="TRANSPARÊNCIA E PRESTAÇÃO DE INFORMAÇÕES"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Cumprimos rigorosamente as obrigações de <strong>prestação de informações</strong> estabelecidas pela Instrução CVM nº 414/04, incluindo relatórios mensais de atividades, demonstrações financeiras trimestrais e anuais auditadas, e comunicação imediata de fatos relevantes. Mantemos canal direto com investidores através de relatórios de performance das operações.
                                    </p>
                                    <p className={S.paragraph}>
                                        Disponibilizamos no site da CVM e em nossa plataforma digital todos os <strong>documentos obrigatórios</strong>, incluindo prospectos de emissão, termos de securitização, relatórios de classificação de risco e demonstrações financeiras. Garantimos acesso transparente às informações sobre performance das carteiras e eventos de pagamento dos certificados.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="supervisao"
                            number={6}
                            title="SUPERVISÃO E MONITORAMENTO REGULATÓRIO"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Submetemo-nos regularmente à <strong>supervisão da CVM</strong> através de inspeções, análises documentais e monitoramento contínuo de nossas atividades. Mantemos auditoria externa independente credenciada pela CVM e controles internos certificados por organismos reconhecidos. Nossa estrutura de compliance é supervisionada por comitê independente com participação de conselheiros externos.
                                    </p>
                                    <p className={S.paragraph}>
                                        Investimos continuamente em <strong>capacitação técnica</strong> com certificações CPA-20, CEA e CGA para nossa equipe. Participamos ativamente de associações setoriais como ANBIMA e ABECIP, contribuindo para o desenvolvimento das melhores práticas do mercado de securitização. Mantemos canal direto com a CVM para esclarecimentos regulatórios e consultas técnicas.
                                    </p>
                                    <p className={S.lastUpdated}>
                                        Última atualização das Regulamentações CVM: 15 de janeiro de 2024.
                                    </p>
                                </>
                            }
                        />
                    </main>
                </div>
            </div>
        </>
    );
};

export default CvmRegulations;