import S from 'src/presentation/styles/shared/policy-page.module.scss';

const Faq = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Perguntas Frequentes</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                Encontre respostas para as principais dúvidas sobre os serviços da <strong>Bluevine Capital Inc.</strong> Nosso FAQ foi desenvolvido para esclarecer questões comuns sobre antecipação de recebíveis, securitização e demais produtos financeiros.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Sobre a Bluevine</h2>
                            
                            <p className={S.paragraph}>
                                <strong>O que é a Bluevine Capital Inc.?</strong><br/>
                                A Bluevine é uma securitizadora autorizada pela CVM que oferece soluções financeiras inovadoras para empresas, incluindo antecipação de recebíveis, securitização de ativos e estruturação de operações financeiras.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>A Bluevine é regulamentada?</strong><br/>
                                Sim, somos devidamente autorizados e regulamentados pela Comissão de Valores Mobiliários (CVM) e seguimos todas as normas do Banco Central e demais órgãos reguladores.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Antecipação de Recebíveis</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Como funciona a antecipação de recebíveis?</strong><br/>
                                A antecipação permite que sua empresa receba hoje o valor de vendas que só seriam pagas no futuro. Analisamos seus contratos e oferecemos o pagamento antecipado mediante uma taxa competitiva.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Quais documentos são necessários?</strong><br/>
                                Geralmente solicitamos: contratos de venda, demonstrações financeiras, certidões negativas, documentos societários e comprovantes de faturamento dos últimos meses.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Qual o prazo para aprovação?</strong><br/>
                                O processo de análise e aprovação leva entre 3 a 7 dias úteis, dependendo da complexidade da operação e da documentação apresentada.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Securitização</h2>
                            
                            <p className={S.paragraph}>
                                <strong>O que é securitização de recebíveis?</strong><br/>
                                É um processo onde transformamos seus recebíveis em títulos negociáveis no mercado de capitais, permitindo captação de recursos com custos mais baixos e prazos mais longos.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Quais são os benefícios da securitização?</strong><br/>
                                Principais vantagens incluem: custos financeiros reduzidos, prazos mais longos, diversificação de fontes de funding, melhoria do rating de crédito e otimização da estrutura de capital.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Processo e Documentação</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Como iniciar uma operação?</strong><br/>
                                Entre em contato através de nossos canais oficiais, preencha nossa proposta inicial e nossa equipe comercial entrará em contato para apresentar as melhores soluções para seu negócio.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Há valor mínimo para operações?</strong><br/>
                                Sim, trabalhamos com valores mínimos que variam conforme o tipo de operação. Para antecipação simples, o mínimo é R$ 100.000. Para securitização, o mínimo é R$ 5.000.000.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Taxas e Custos</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Como são calculadas as taxas?</strong><br/>
                                As taxas são definidas com base na análise de risco do cliente, qualidade dos recebíveis, prazo da operação e condições de mercado. Sempre oferecemos as melhores condições disponíveis.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Existem custos adicionais?</strong><br/>
                                Podem haver custos de estruturação, análise jurídica, registro em cartório e taxas de administração, que são sempre informados previamente e de forma transparente.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Suporte e Atendimento</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Como entrar em contato?</strong><br/>
                                Você pode nos contatar através do telefone (11) 3000-0000, e-mail contato@bluevine.com.br ou através do formulário em nosso site. Nossa equipe está disponível de segunda a sexta, das 9h às 18h.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Não encontrou sua dúvida aqui?</strong><br/>
                                Nossa equipe de atendimento está sempre disponível para esclarecer questões específicas sobre nossos produtos e serviços. Entre em contato conosco!
                            </p>
                            
                            <p className={S.lastUpdated}>
                                FAQ atualizado em: 25 de junho de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;