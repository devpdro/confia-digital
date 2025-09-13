import S from 'src/presentation/styles/shared/policy-page.module.scss';

const CustomStructuring = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Estruturação Customizada</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                A <strong>Bluevine Capital Inc.</strong> oferece serviços de estruturação customizada para operações financeiras complexas, desenvolvendo soluções sob medida para atender às necessidades específicas de cada cliente.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>O que é Estruturação Customizada</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Soluções Sob Medida:</strong> Desenvolvimento de estruturas financeiras personalizadas que consideram as particularidades do negócio, setor de atuação e objetivos estratégicos da empresa.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Expertise Multidisciplinar:</strong> Nossa equipe combina conhecimentos em direito, finanças, contabilidade e regulamentação para criar estruturas robustas e eficientes.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Tipos de Estruturação</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Securitização Complexa:</strong><br/>
                                • Múltiplas séries de certificados<br/>
                                • Diferentes classes de subordinação<br/>
                                • Estruturas com reforço de crédito<br/>
                                • Operações com co-obrigação
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Fundos de Investimento:</strong><br/>
                                • Fundos de Investimento em Direitos Creditórios (FIDC)<br/>
                                • Fundos de Investimento em Participações (FIP)<br/>
                                • Fundos Multimercado especializados<br/>
                                • Estruturas de cotas seniores e subordinadas
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Setores Especializados</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Agronegócio:</strong> Estruturação de operações com recebíveis rurais, CPR financeira, warrants agropecuários e financiamento de safras.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Infraestrutura:</strong> Financiamento de projetos de longo prazo, debêntures de infraestrutura e estruturas de project finance.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Energia:</strong> Operações com recebíveis de energia elétrica, financiamento de usinas e estruturas de hedge cambial.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Imobiliário:</strong> Securitização de recebíveis imobiliários, CRI, fundos imobiliários e financiamento habitacional.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Processo de Estruturação</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Fase 1 - Diagnóstico:</strong> Análise detalhada da empresa, fluxo de caixa, necessidades de capital e objetivos estratégicos.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Fase 2 - Modelagem:</strong> Desenvolvimento de diferentes cenários e estruturas, análise de viabilidade e otimização fiscal.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Fase 3 - Estruturação:</strong> Elaboração da documentação legal, registro junto aos órgãos competentes e coordenação com prestadores de serviços.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Fase 4 - Execução:</strong> Implementação da estrutura, captação de recursos e acompanhamento pós-operação.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Vantagens da Customização</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Otimização de Custos:</strong> Estruturas desenhadas para minimizar custos financeiros e tributários, maximizando a eficiência da operação.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Flexibilidade:</strong> Adaptação às necessidades específicas do negócio, permitindo ajustes conforme evolução da empresa.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Compliance:</strong> Estruturas desenvolvidas em total conformidade com a regulamentação vigente e melhores práticas de mercado.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Parceiros Estratégicos</h2>
                            
                            <p className={S.paragraph}>
                                Trabalhamos com uma rede de parceiros especializados incluindo escritórios de advocacia, consultorias tributárias, agências de rating e auditores independentes para garantir excelência em todas as etapas.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Serviços de Estruturação Customizada atualizados em: 15 de julho de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomStructuring;