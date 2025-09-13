import S from 'src/presentation/styles/shared/policy-page.module.scss';

const CodeOfConduct = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Código de Conduta</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                Este Código de Conduta estabelece os princípios éticos e comportamentais que orientam todas as atividades da <strong>Bluevine Capital Inc.</strong> e de seus colaboradores, parceiros e prestadores de serviços.
                            </p>
                            
                            <p className={S.paragraph}>
                                Nosso compromisso é manter os mais altos padrões de integridade, transparência e responsabilidade em todas as nossas operações, garantindo um ambiente de trabalho respeitoso e inclusivo.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Princípios Fundamentais</h2>
                            <p className={S.paragraph}>
                                <strong>Integridade:</strong> Agimos com honestidade e transparência em todas as nossas relações comerciais e pessoais, mantendo sempre a coerência entre nossos valores e ações.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Respeito:</strong> Tratamos todas as pessoas com dignidade e respeito, valorizando a diversidade e promovendo um ambiente inclusivo e livre de discriminação.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Responsabilidade:</strong> Assumimos a responsabilidade por nossas ações e decisões, buscando sempre o melhor interesse de nossos clientes, colaboradores e da sociedade.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Conduta Profissional</h2>
                            <p className={S.paragraph}>
                                Todos os colaboradores devem manter o mais alto padrão de conduta profissional, incluindo pontualidade, dedicação, competência técnica e comportamento ético em todas as interações.
                            </p>
                            
                            <p className={S.paragraph}>
                                É vedado o uso de informações privilegiadas para benefício próprio ou de terceiros, bem como a divulgação não autorizada de informações confidenciais da empresa ou de nossos clientes.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Conflito de Interesses</h2>
                            <p className={S.paragraph}>
                                Colaboradores devem evitar situações que possam gerar conflito entre seus interesses pessoais e os da empresa. Qualquer situação potencial de conflito deve ser imediatamente comunicada à supervisão.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Compliance e Regulamentações</h2>
                            <p className={S.paragraph}>
                                Todos devem cumprir rigorosamente as leis, regulamentações e normas aplicáveis ao setor financeiro, incluindo as diretrizes da CVM, Banco Central e demais órgãos reguladores.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Denúncias e Violações</h2>
                            <p className={S.paragraph}>
                                Encorajamos a comunicação de qualquer violação deste Código de Conduta através de nossos canais de denúncia. Todas as comunicações serão tratadas com confidencialidade e sem retaliação.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Este Código de Conduta está em vigor desde: 1º de janeiro de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct;