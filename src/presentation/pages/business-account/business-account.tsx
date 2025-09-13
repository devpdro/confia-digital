import S from 'src/presentation/styles/shared/policy-page.module.scss';

const BusinessAccount = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Conta Empresarial</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                A <strong>Conta Empresarial Bluevine</strong> oferece soluções bancárias completas para empresas que buscam eficiência, tecnologia e atendimento especializado para suas operações financeiras.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Benefícios da Conta Empresarial</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Gestão Financeira Integrada:</strong> Plataforma digital completa que integra conta corrente, investimentos, pagamentos e recebimentos em um só lugar.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Taxas Competitivas:</strong> Tarifas reduzidas para operações bancárias, transferências e serviços financeiros, com condições especiais para clientes Bluevine.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Atendimento Especializado:</strong> Gerente de relacionamento dedicado com conhecimento específico do seu segmento de atuação.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Serviços Disponíveis</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Conta Corrente Digital:</strong><br/>
                                • Movimentação 24/7 via internet banking e app<br/>
                                • Transferências ilimitadas entre contas Bluevine<br/>
                                • Extrato em tempo real com categorização automática<br/>
                                • Cartão de débito empresarial sem anuidade
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Pagamentos e Recebimentos:</strong><br/>
                                • PIX empresarial com limites elevados<br/>
                                • Boletos de cobrança personalizados<br/>
                                • Débito automático para fornecedores<br/>
                                • Link de pagamento para vendas online
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Investimentos Empresariais</h2>
                            
                            <p className={S.paragraph}>
                                <strong>CDB Empresarial:</strong> Rentabilidade acima da poupança com liquidez diária para reserva de emergência da empresa.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Fundos de Investimento:</strong> Carteira diversificada de fundos adequados ao perfil de risco e prazo da empresa.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Tesouro Direto:</strong> Investimento em títulos públicos com diferentes prazos e indexadores para planejamento financeiro.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Crédito Empresarial</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Linha de Crédito Pré-Aprovada:</strong> Limite disponível baseado no relacionamento e movimentação da conta, com uso conforme necessidade.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Antecipação de Recebíveis:</strong> Integração direta com as operações de antecipação, facilitando o processo e reduzindo prazos.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Capital de Giro:</strong> Empréstimos para necessidades pontuais com taxas preferenciais para correntistas.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Tecnologia e Segurança</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Plataforma Digital:</strong> Interface intuitiva com dashboard executivo, relatórios gerenciais e integração com sistemas de gestão (ERP).
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Segurança Bancária:</strong> Criptografia de ponta, autenticação multifator e monitoramento 24/7 para proteção das operações.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>API Banking:</strong> Integração via API para empresas que desejam conectar seus sistemas internos com a conta bancária.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Como Abrir sua Conta</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Processo 100% Digital:</strong> Abertura de conta em até 24 horas com envio de documentos pela plataforma digital.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Documentos Necessários:</strong><br/>
                                • Contrato social atualizado<br/>
                                • Cartão CNPJ<br/>
                                • Documentos dos sócios<br/>
                                • Comprovante de endereço da empresa<br/>
                                • Faturamento dos últimos 3 meses
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Informações da Conta Empresarial atualizadas em: 10 de julho de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessAccount;