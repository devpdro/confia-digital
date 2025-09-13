import S from 'src/presentation/styles/shared/policy-page.module.scss';

const StandardContracts = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Contratos Padrão</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                A <strong>Bluevine Capital Inc.</strong> disponibiliza modelos de contratos padrão para facilitar e agilizar o processo de formalização de operações financeiras com nossos clientes e parceiros.
                            </p>
                            
                            <p className={S.paragraph}>
                                Todos os nossos contratos são elaborados em conformidade com a legislação vigente e as melhores práticas do mercado financeiro, garantindo segurança jurídica para todas as partes envolvidas.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Tipos de Contratos Disponíveis</h2>
                            <p className={S.paragraph}>
                                <strong>Contratos de Antecipação de Recebíveis:</strong> Modelos para operações de antecipação de contratos comerciais, com diferentes modalidades de garantia e prazos de pagamento.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Contratos de Securitização:</strong> Documentos para estruturação de operações de securitização de recebíveis, incluindo termos e condições específicos para cada tipo de ativo.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Contratos de Prestação de Serviços:</strong> Modelos para formalização de serviços de consultoria financeira, estruturação de operações e assessoria empresarial.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Características dos Contratos</h2>
                            <p className={S.paragraph}>
                                Nossos contratos padrão incluem cláusulas de proteção para ambas as partes, definição clara de direitos e obrigações, procedimentos de resolução de conflitos e condições de rescisão.
                            </p>
                            
                            <p className={S.paragraph}>
                                Todos os documentos são revisados periodicamente por nossa equipe jurídica para garantir atualização com mudanças na legislação e regulamentações do setor.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Processo de Customização</h2>
                            <p className={S.paragraph}>
                                Embora utilizemos modelos padrão, cada contrato pode ser customizado conforme as necessidades específicas da operação e características do cliente.
                            </p>
                            
                            <p className={S.paragraph}>
                                Nossa equipe jurídica e comercial trabalha em conjunto para adaptar os termos contratuais, sempre respeitando os limites regulamentares e as políticas internas da empresa.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Acesso aos Modelos</h2>
                            <p className={S.paragraph}>
                                Os modelos de contratos padrão estão disponíveis para consulta por clientes e parceiros mediante solicitação através de nossos canais oficiais de atendimento.
                            </p>
                            
                            <p className={S.paragraph}>
                                Para obter acesso aos documentos ou esclarecer dúvidas sobre cláusulas específicas, entre em contato com nossa equipe comercial ou jurídica.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Suporte Jurídico</h2>
                            <p className={S.paragraph}>
                                Oferecemos suporte jurídico completo durante todo o processo de negociação e assinatura dos contratos, esclarecendo dúvidas e orientando sobre os termos acordados.
                            </p>
                            
                            <p className={S.paragraph}>
                                Nossa equipe está disponível para reuniões presenciais ou virtuais para discussão detalhada dos contratos e alinhamento de expectativas entre as partes.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Modelos de Contratos Padrão atualizados em: 5 de junho de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StandardContracts;