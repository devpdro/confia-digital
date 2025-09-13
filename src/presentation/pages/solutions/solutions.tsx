import S from 'src/presentation/styles/shared/policy-page.module.scss';

const Solutions = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Soluções Financeiras</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                A <strong>Bluevine Capital Inc.</strong> oferece um portfólio completo de soluções financeiras para empresas de todos os portes, desde startups até grandes corporações, sempre com foco em inovação e excelência no atendimento.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Antecipação de Recebíveis</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Liquidez Imediata:</strong> Transforme seus recebíveis futuros em capital de giro hoje mesmo, com processo ágil e taxas competitivas do mercado.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Características:</strong><br/>
                                • Valores a partir de R$ 100.000<br/>
                                • Prazos de 30 a 360 dias<br/>
                                • Análise em até 48 horas<br/>
                                • Sem necessidade de garantias adicionais<br/>
                                • Processo 100% digital
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Securitização de Ativos</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Acesso ao Mercado de Capitais:</strong> Estruturação de operações de securitização para captação de recursos com custos reduzidos e prazos estendidos.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Vantagens:</strong><br/>
                                • Custos financeiros até 40% menores<br/>
                                • Prazos de até 10 anos<br/>
                                • Melhoria do rating de crédito<br/>
                                • Diversificação de fontes de funding<br/>
                                • Estruturas sob medida
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Conta Empresarial Digital</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Banking Completo:</strong> Solução bancária integrada com conta corrente, investimentos, pagamentos e crédito em uma única plataforma.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Funcionalidades:</strong><br/>
                                • Conta corrente sem tarifas básicas<br/>
                                • PIX empresarial ilimitado<br/>
                                • Cartão de débito sem anuidade<br/>
                                • Investimentos com rentabilidade superior<br/>
                                • Linha de crédito pré-aprovada
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Consultoria Financeira</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Assessoria Especializada:</strong> Equipe de especialistas para orientação em planejamento financeiro, estruturação de operações e otimização de recursos.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Serviços Inclusos:</strong><br/>
                                • Análise de fluxo de caixa<br/>
                                • Planejamento de investimentos<br/>
                                • Estruturação de operações complexas<br/>
                                • Otimização tributária<br/>
                                • Gestão de riscos financeiros
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Soluções por Segmento</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Agronegócio:</strong> Financiamento de safras, antecipação de CPR, estruturação de warrants e soluções para cooperativas agrícolas.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Construção Civil:</strong> Antecipação de recebíveis de obras, financiamento de projetos imobiliários e estruturação de CRI.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Tecnologia:</strong> Capital de crescimento para startups, financiamento de P&D e estruturas de equity para scale-ups.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Energia:</strong> Financiamento de projetos de energia renovável, antecipação de recebíveis de energia e estruturas de project finance.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Tecnologia e Inovação</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Plataforma Digital:</strong> Sistema proprietário com inteligência artificial para análise de crédito, automação de processos e experiência do usuário otimizada.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>API Banking:</strong> Integração com sistemas ERP, marketplaces e plataformas de gestão para automatização completa dos processos financeiros.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Diferenciais Competitivos</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Agilidade:</strong> Processos otimizados que reduzem o tempo de análise e liberação de recursos em até 70% comparado ao mercado tradicional.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Transparência:</strong> Comunicação clara sobre custos, prazos e condições, sem taxas ocultas ou surpresas no processo.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Flexibilidade:</strong> Soluções customizadas que se adaptam às necessidades específicas de cada cliente e setor de atuação.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Portfólio de Soluções atualizado em: 25 de julho de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solutions;