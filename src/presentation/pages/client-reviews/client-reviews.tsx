import S from 'src/presentation/styles/shared/policy-page.module.scss';

const ClientReviews = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Avaliações de Clientes</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                Conheça a experiência de nossos clientes com os serviços da <strong>Bluevine Capital Inc.</strong> Nosso compromisso é oferecer soluções financeiras que realmente fazem a diferença no crescimento dos negócios.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Depoimentos de Sucesso</h2>
                            
                            <p className={S.paragraph}>
                                <strong>"Transformação no fluxo de caixa"</strong><br/>
                                "A Bluevine revolucionou nossa gestão financeira. Com a antecipação de recebíveis, conseguimos investir em expansão sem comprometer o capital de giro. Recomendo para qualquer empresa que busca crescimento sustentável."<br/>
                                <em>- Maria Silva, CEO da TechSolutions Ltda.</em>
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>"Parceria estratégica"</strong><br/>
                                "Mais que um fornecedor de crédito, a Bluevine é um parceiro estratégico. A equipe entende nosso negócio e oferece soluções personalizadas. Já são 3 anos de parceria e só temos a agradecer."<br/>
                                <em>- João Santos, Diretor Financeiro da Construtora Horizonte</em>
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Resultados Comprovados</h2>
                            
                            <p className={S.paragraph}>
                                <strong>"Crescimento de 40% em 12 meses"</strong><br/>
                                "Com o capital antecipado pela Bluevine, conseguimos aceitar contratos maiores e crescer 40% em um ano. O processo é ágil e a equipe sempre disponível para esclarecer dúvidas."<br/>
                                <em>- Carlos Mendes, Sócio da Logística Express</em>
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>"Securitização que mudou nosso patamar"</strong><br/>
                                "A operação de securitização estruturada pela Bluevine nos permitiu acessar o mercado de capitais com custos muito competitivos. Foi um divisor de águas para nossa empresa."<br/>
                                <em>- Ana Costa, CFO da Energia Renovável S.A.</em>
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Satisfação dos Clientes</h2>
                            
                            <p className={S.paragraph}>
                                <strong>98% de Satisfação:</strong> Nossos clientes avaliam nossos serviços com nota média de 4.9/5.0, destacando agilidade, transparência e atendimento personalizado.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>95% de Renovação:</strong> Taxa de renovação de contratos que demonstra a confiança e satisfação de nossos parceiros comerciais.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Tempo Médio de Resposta:</strong> 24 horas para análise inicial e 5 dias úteis para aprovação completa das operações.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Setores Atendidos</h2>
                            
                            <p className={S.paragraph}>
                                Atendemos empresas de diversos segmentos: construção civil, tecnologia, logística, energia, saúde, educação, varejo e serviços. Cada setor tem suas particularidades, e nossa equipe especializada desenvolve soluções sob medida.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Seja Nosso Próximo Case de Sucesso</h2>
                            
                            <p className={S.paragraph}>
                                Quer fazer parte desta lista de empresas que transformaram seus resultados com nossas soluções? Entre em contato conosco e descubra como podemos impulsionar o crescimento do seu negócio.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Avaliações atualizadas em: 30 de junho de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;