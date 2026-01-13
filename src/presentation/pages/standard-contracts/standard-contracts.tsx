import { Meta, LegalPageSection } from "src/presentation/components";

import S from 'src/presentation/styles/shared/legal-page.module.scss';

const StandardContracts = () => {
    return (
        <>
            <Meta
                title="Contratos Padrão | Confia Capital"
                description="Modelos de contratos padrão especializados em operações de securitização de recebíveis. Instrumentos contratuais para CRI, CRA e cessão fiduciária."
                keywords="contratos padrão, securitização, CRI, CRA, cessão fiduciária, termos de securitização, agente fiduciário"
            />
            <div className={S.page}>
                <div className={S.container}>
                    <main className={S.content}>
                        <header className={S.header}>
                            <h1 className={S.title}>Contratos Padrão</h1>
                        </header>

                        <LegalPageSection
                            id="introducao"
                            number={1}
                            title="INTRODUÇÃO"
                            defaultExpanded={true}
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        A <strong>Confia Capital Securitizadora S.A.</strong> disponibiliza modelos de contratos padrão especializados em operações de securitização de recebíveis, estruturados para atender às exigências regulamentares da CVM e garantir agilidade na formalização de operações com cedentes, investidores e demais participantes do mercado de capitais.
                                    </p>
                                    <p className={S.paragraph}>
                                        Todos os nossos instrumentos contratuais são elaborados em estrita conformidade com a <strong>Lei nº 9.514/97</strong>, <strong>Instrução CVM nº 414/04</strong>, regulamentações do BACEN e melhores práticas do mercado de securitização, assegurando robustez jurídica, segregação patrimonial e proteção aos investidores.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="instrumentos"
                            number={2}
                            title="INSTRUMENTOS CONTRATUAIS DE SECURITIZAÇÃO"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        <strong>Contratos de Cessão Fiduciária:</strong> Instrumentos para cessão de recebíveis com garantia fiduciária, incluindo cláusulas de segregação patrimonial, conta centralizadora e condições de liberação de recursos. Contempla diferentes modalidades: cessão plena, cessão em garantia e cessão pro soluto/pro solvendo.
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Termos de Securitização CRI/CRA:</strong> Documentos estruturantes para emissão de Certificados de Recebíveis Imobiliários e do Agronegócio, definindo regime fiduciário, critérios de elegibilidade dos recebíveis, eventos de vencimento antecipado e distribuição de recursos aos investidores.
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Contratos de Agente Fiduciário:</strong> Instrumentos para nomeação e regulamentação das atividades do agente fiduciário, incluindo deveres de fiscalização, representação dos investidores, gestão de garantias e comunicação de eventos relevantes.
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Contratos de Prestação de Serviços Especializados:</strong> Modelos para formalização de serviços de due diligence, análise de crédito, estruturação de operações, gestão de carteiras e relacionamento com investidores.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="caracteristicas"
                            number={3}
                            title="CARACTERÍSTICAS TÉCNICAS E JURÍDICAS"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Nossos instrumentos contratuais incorporam <strong>cláusulas específicas de securitização</strong>, incluindo: (i) segregação patrimonial e regime fiduciário; (ii) critérios de elegibilidade e substituição de recebíveis; (iii) eventos de vencimento antecipado e liquidação; (iv) distribuição em cascata (waterfall) de recursos; (v) representação de investidores; e (vi) procedimentos de cobrança e recuperação de crédito.
                                    </p>
                                    <p className={S.paragraph}>
                                        Todos os documentos são <strong>revisados trimestralmente</strong> por nossa equipe jurídica especializada em mercado de capitais, em conjunto com escritórios de advocacia externos, para garantir conformidade com alterações na regulamentação CVM, BACEN e jurisprudência aplicável às operações de securitização.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="estruturacao"
                            number={4}
                            title="ESTRUTURAÇÃO PERSONALIZADA"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Cada operação de securitização é <strong>estruturada sob medida</strong>, adaptando nossos modelos contratuais às características específicas dos recebíveis, perfil de risco dos sacados, necessidades de liquidez do cedente e apetite de risco dos investidores. Consideramos aspectos como concentração de sacados, dispersão geográfica, sazonalidade e histórico de inadimplência.
                                    </p>
                                    <p className={S.paragraph}>
                                        Nossa equipe multidisciplinar (jurídica, estruturação, risco e comercial) trabalha em conjunto para <strong>otimizar a estrutura</strong>, sempre respeitando os limites regulamentares CVM, políticas internas de risco e rating das agências especializadas, garantindo atratividade para investidores e viabilidade econômica para cedentes.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="acesso"
                            number={5}
                            title="ACESSO E CONFIDENCIALIDADE"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Os modelos contratuais estão disponíveis para <strong>cedentes qualificados</strong> e <strong>investidores profissionais</strong> mediante assinatura de acordo de confidencialidade (NDA) e análise prévia de elegibilidade. O acesso é concedido através de nossa plataforma digital segura ou mediante solicitação formal aos nossos canais especializados.
                                    </p>
                                    <p className={S.paragraph}>
                                        Para <strong>consulta de modelos</strong> ou esclarecimentos sobre cláusulas específicas, entre em contato através de: juridico@confiacapital.com.br | estruturacao@confiacapital.com.br | Telefone: "(19) 98106-2535".
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="assessoria"
                            number={6}
                            title="ASSESSORIA JURÍDICA ESPECIALIZADA"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Oferecemos <strong>assessoria jurídica completa</strong> durante todo o ciclo da operação: desde a estruturação inicial, due diligence jurídica, negociação de termos, assinatura de contratos, até o acompanhamento pós-emissão e gestão de eventos. Nossa equipe possui expertise em direito bancário, mercado de capitais e recuperação de crédito.
                                    </p>
                                    <p className={S.paragraph}>
                                        Realizamos <strong>reuniões técnicas</strong> presenciais ou virtuais com cedentes, investidores, agentes fiduciários e demais participantes para alinhamento de expectativas, esclarecimento de dúvidas e discussão detalhada dos aspectos contratuais e regulamentares das operações.
                                    </p>
                                    <p className={S.lastUpdated}>
                                        Modelos de Contratos Padrão atualizados em: 15 de janeiro de 2024.
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

export default StandardContracts;