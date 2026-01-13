import { Meta, LegalPageSection } from "src/presentation/components";

import S from 'src/presentation/styles/shared/legal-page.module.scss';

const CodeOfConduct = () => {
    return (
        <>
            <Meta
                title="Código de Conduta | Confia Capital"
                description="Código de conduta da Confia Capital Securitizadora. Princípios éticos e comportamentais que orientam nossas atividades no mercado de capitais."
                keywords="código de conduta, ética, compliance, securitização, Confia Capital, integridade, transparência"
            />
            <div className={S.page}>
                <div className={S.container}>
                    <main className={S.content}>
                        <header className={S.header}>
                            <h1 className={S.title}>Código de Conduta</h1>
                        </header>

                        <LegalPageSection
                            id="introducao"
                            number={1}
                            title="INTRODUÇÃO"
                            defaultExpanded={true}
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Este Código de Conduta estabelece os princípios éticos e comportamentais que orientam todas as atividades da <strong>Confia Capital Securitizadora S.A.</strong>, seus colaboradores, administradores, conselheiros, parceiros e prestadores de serviços no mercado de capitais.
                                    </p>
                                    <p className={S.paragraph}>
                                        Como instituição do mercado financeiro, assumimos o compromisso de manter os mais elevados padrões de integridade, transparência e responsabilidade, em conformidade com as regulamentações da CVM, BACEN e demais órgãos supervisores, garantindo a confiança de investidores, clientes e da sociedade.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="valores-principios"
                            number={2}
                            title="VALORES E PRINCÍPIOS ÉTICOS"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        <strong>Integridade e Transparência:</strong> Conduzimos todas as operações de securitização com absoluta honestidade, fornecendo informações precisas e completas aos investidores, órgãos reguladores e demais stakeholders. Mantemos registros fidedignos e prestamos contas de forma transparente sobre nossas atividades.
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Proteção aos Investidores:</strong> Priorizamos sempre os interesses dos investidores, garantindo que todas as operações sejam estruturadas com rigorosa análise de risco, segregação patrimonial adequada e divulgação completa de informações relevantes para tomada de decisão de investimento.
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Excelência Técnica:</strong> Mantemos os mais altos padrões de competência técnica em securitização, investindo continuamente em capacitação, certificações profissionais e atualização sobre as melhores práticas do mercado de capitais nacional e internacional.
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Responsabilidade Socioambiental:</strong> Consideramos critérios ESG (Environmental, Social and Governance) em nossas análises, promovendo operações que contribuam para o desenvolvimento sustentável e o bem-estar da sociedade.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="conduta-mercado"
                            number={3}
                            title="CONDUTA NO MERCADO DE CAPITAIS"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Todos os colaboradores devem possuir certificações adequadas (CPA-20, CEA, CGA) e manter atualização contínua sobre regulamentações CVM, práticas de mercado e inovações em securitização. É obrigatório o cumprimento dos prazos regulatórios, qualidade técnica nas análises e comportamento ético em todas as interações com investidores, reguladores e parceiros.
                                    </p>
                                    <p className={S.paragraph}>
                                        É <strong>estritamente vedado</strong> o uso de informações privilegiadas (insider trading), manipulação de preços, front running ou qualquer prática que comprometa a integridade do mercado. Informações confidenciais sobre operações, clientes ou estratégias da empresa devem ser protegidas com máximo rigor, sendo compartilhadas apenas com pessoas autorizadas e mediante necessidade profissional.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="conflitos-interesse"
                            number={4}
                            title="GESTÃO DE CONFLITOS DE INTERESSE"
                            content={
                                <p className={S.paragraph}>
                                    Colaboradores devem evitar situações que possam comprometer sua independência e objetividade, especialmente em análises de crédito, estruturação de operações e relacionamento com investidores. É obrigatória a declaração de investimentos pessoais, participações societárias, relacionamentos familiares ou comerciais que possam gerar conflito. Operações envolvendo partes relacionadas requerem aprovação prévia do comitê de ética.
                                </p>
                            }
                        />

                        <LegalPageSection
                            id="pld-compliance"
                            number={5}
                            title="PREVENÇÃO À LAVAGEM DE DINHEIRO E COMPLIANCE"
                            content={
                                <p className={S.paragraph}>
                                    Cumprimos integralmente as políticas de <strong>Prevenção à Lavagem de Dinheiro (PLD)</strong> e <strong>Combate ao Financiamento do Terrorismo (CFT)</strong>, realizando due diligence rigorosa de clientes, monitoramento de operações suspeitas e comunicação tempestiva ao COAF. Mantemos controles internos robustos, auditoria independente e treinamento contínuo sobre regulamentações CVM, BACEN, Receita Federal e demais órgãos competentes.
                                </p>
                            }
                        />

                        <LegalPageSection
                            id="canal-denuncias"
                            number={6}
                            title="CANAL DE DENÚNCIAS E OUVIDORIA"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Mantemos <strong>canal de denúncias</strong> independente e confidencial para comunicação de violações éticas, irregularidades ou práticas inadequadas. Garantimos proteção contra retaliação aos denunciantes de boa-fé. Nossa ouvidoria atende reclamações, sugestões e esclarecimentos de investidores e clientes, com prazos de resposta estabelecidos pela regulamentação CVM.
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Contatos:</strong> Ouvidoria: ouvidoria@confiacapital.com.br | Canal de Denúncias: etica@confiacapital.com.br | Telefone: 0800-555-0123
                                    </p>
                                    <p className={S.lastUpdated}>
                                        Este Código de Conduta está em vigor desde: 15 de janeiro de 2024.
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

export default CodeOfConduct;