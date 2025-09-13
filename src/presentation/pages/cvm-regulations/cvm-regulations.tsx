import S from 'src/presentation/styles/shared/policy-page.module.scss';

const CvmRegulations = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Regulamentações CVM</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                A <strong>Bluevine Capital Inc.</strong> opera como securitizadora devidamente autorizada pela <strong>Comissão de Valores Mobiliários (CVM)</strong>, cumprindo rigorosamente todas as regulamentações aplicáveis ao mercado de capitais brasileiro.
                            </p>
                            
                            <p className={S.paragraph}>
                                Este documento apresenta as principais regulamentações da CVM que regem nossas atividades e como garantimos o cumprimento integral de todas as normas estabelecidas.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Autorização e Registro</h2>
                            <p className={S.paragraph}>
                                Nossa empresa possui registro ativo junto à CVM como securitizadora, conforme previsto na Lei nº 9.514/97 e nas Instruções CVM nº 414/04 e suas alterações posteriores.
                            </p>
                            
                            <p className={S.paragraph}>
                                Mantemos atualizadas todas as informações cadastrais e operacionais exigidas pela CVM, incluindo demonstrações financeiras, relatórios de atividades e demais documentos regulamentares.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Operações de Securitização</h2>
                            <p className={S.paragraph}>
                                Todas as nossas operações de securitização são estruturadas em conformidade com as normas da CVM, garantindo transparência, segregação patrimonial e proteção aos investidores.
                            </p>
                            
                            <p className={S.paragraph}>
                                Seguimos rigorosamente os procedimentos de due diligence, análise de crédito e estruturação de operações conforme estabelecido pelas regulamentações vigentes.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Governança Corporativa</h2>
                            <p className={S.paragraph}>
                                Adotamos as melhores práticas de governança corporativa estabelecidas pela CVM, incluindo políticas de compliance, gestão de riscos e controles internos.
                            </p>
                            
                            <p className={S.paragraph}>
                                Nossa estrutura organizacional atende aos requisitos de independência e qualificação técnica exigidos para administradores e conselheiros de securitizadoras.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Transparência e Divulgação</h2>
                            <p className={S.paragraph}>
                                Cumprimos integralmente as obrigações de divulgação de informações estabelecidas pela CVM, mantendo investidores e o mercado informados sobre nossas atividades e performance.
                            </p>
                            
                            <p className={S.paragraph}>
                                Publicamos regularmente relatórios financeiros, comunicados ao mercado e demais informações relevantes conforme cronograma estabelecido pela regulamentação.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Compliance e Auditoria</h2>
                            <p className={S.paragraph}>
                                Mantemos estrutura robusta de compliance e controles internos, com auditoria independente e monitoramento contínuo do cumprimento das normas regulamentares.
                            </p>
                            
                            <p className={S.paragraph}>
                                Realizamos treinamentos periódicos para nossa equipe sobre as regulamentações da CVM e melhores práticas do mercado de capitais.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Última atualização das Regulamentações CVM: 10 de abril de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvmRegulations;