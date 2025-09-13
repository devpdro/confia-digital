import S from 'src/presentation/styles/shared/policy-page.module.scss';

const SimulationCalculator = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Calculadora de Simulação</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                Simule suas operações financeiras com a <strong>Bluevine Capital Inc.</strong> e descubra as melhores condições para antecipação de recebíveis e securitização de ativos.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Simulação de Antecipação de Recebíveis</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Como funciona:</strong> Informe o valor dos seus recebíveis, prazo médio de recebimento e nosso sistema calculará automaticamente as condições de antecipação disponíveis.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Parâmetros da simulação:</strong><br/>
                                • Valor mínimo: R$ 100.000<br/>
                                • Valor máximo: R$ 50.000.000<br/>
                                • Prazo: 30 a 360 dias<br/>
                                • Taxa: A partir de 1,2% ao mês
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Simulação de Securitização</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Estruturação personalizada:</strong> Para operações de securitização, nossa equipe desenvolve simulações customizadas considerando o perfil dos recebíveis, rating dos devedores e estrutura da operação.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Benefícios da securitização:</strong><br/>
                                • Custos financeiros reduzidos<br/>
                                • Prazos mais longos (até 10 anos)<br/>
                                • Acesso ao mercado de capitais<br/>
                                • Melhoria do rating de crédito
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Fatores que Influenciam as Taxas</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Qualidade dos Recebíveis:</strong> Histórico de pagamento, rating dos devedores e diversificação da carteira são fatores determinantes para as condições oferecidas.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Perfil da Empresa:</strong> Tempo de mercado, situação financeira, relacionamento bancário e histórico de crédito influenciam diretamente nas taxas.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Condições de Mercado:</strong> Taxa Selic, spread bancário e liquidez do mercado são variáveis externas que impactam o custo final.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Como Usar a Calculadora</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Passo 1:</strong> Selecione o tipo de operação (Antecipação ou Securitização)<br/>
                                <strong>Passo 2:</strong> Informe o valor total dos recebíveis<br/>
                                <strong>Passo 3:</strong> Indique o prazo médio de vencimento<br/>
                                <strong>Passo 4:</strong> Adicione informações sobre os devedores<br/>
                                <strong>Passo 5:</strong> Receba a simulação personalizada
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Próximos Passos</h2>
                            
                            <p className={S.paragraph}>
                                Após a simulação, nossa equipe comercial entrará em contato para apresentar uma proposta detalhada e esclarecer todas as dúvidas sobre a operação.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Importante:</strong> Os valores apresentados na simulação são estimativos e podem variar após análise detalhada da documentação e due diligence completa.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Calculadora atualizada em: 5 de julho de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimulationCalculator;