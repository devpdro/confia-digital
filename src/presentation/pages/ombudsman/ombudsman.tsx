import S from 'src/presentation/styles/shared/policy-page.module.scss';

const Ombudsman = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Ouvidoria</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                A Ouvidoria da <strong>Bluevine Capital Inc.</strong> é um canal independente de comunicação entre nossos clientes, parceiros e a empresa, garantindo o atendimento imparcial e eficiente de reclamações, sugestões e elogios.
                            </p>
                            
                            <p className={S.paragraph}>
                                Nosso compromisso é assegurar que todas as manifestações sejam tratadas com seriedade, confidencialidade e dentro dos prazos estabelecidos pela regulamentação.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Função da Ouvidoria</h2>
                            <p className={S.paragraph}>
                                A Ouvidoria atua como mediadora entre clientes e a empresa, buscando soluções justas e adequadas para questões não resolvidas pelos canais tradicionais de atendimento.
                            </p>
                            
                            <p className={S.paragraph}>
                                Também tem a função de identificar falhas nos processos internos e propor melhorias nos produtos e serviços oferecidos pela empresa.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Como Entrar em Contato</h2>
                            <p className={S.paragraph}>
                                <strong>E-mail:</strong> ouvidoria@bluevine.com.br<br/>
                                <strong>Telefone:</strong> 0800-123-4567 (ligação gratuita)<br/>
                                <strong>Correspondência:</strong> Rua das Flores, 123 - São Paulo/SP - CEP: 01234-567
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Horário de Atendimento:</strong> Segunda a sexta-feira, das 9h às 18h (exceto feriados nacionais).
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Prazos de Resposta</h2>
                            <p className={S.paragraph}>
                                Todas as manifestações recebidas pela Ouvidoria são respondidas em até <strong>10 dias úteis</strong>, conforme estabelecido pela regulamentação do Banco Central e CVM.
                            </p>
                            
                            <p className={S.paragraph}>
                                Em casos complexos que exijam análise mais detalhada, o prazo pode ser estendido por mais 10 dias úteis, com comunicação prévia ao solicitante.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Tipos de Manifestação</h2>
                            <p className={S.paragraph}>
                                <strong>Reclamações:</strong> Insatisfação com produtos, serviços ou atendimento recebido.<br/>
                                <strong>Denúncias:</strong> Comunicação de irregularidades ou descumprimento de normas.<br/>
                                <strong>Sugestões:</strong> Propostas de melhoria em produtos, serviços ou processos.<br/>
                                <strong>Elogios:</strong> Reconhecimento de bom atendimento ou qualidade dos serviços.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Confidencialidade e Proteção</h2>
                            <p className={S.paragraph}>
                                Garantimos total confidencialidade das informações fornecidas e proteção contra qualquer tipo de retaliação aos manifestantes.
                            </p>
                            
                            <p className={S.paragraph}>
                                Todas as comunicações são tratadas com sigilo e as informações pessoais são protegidas conforme nossa Política de Privacidade e a LGPD.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Informações da Ouvidoria atualizadas em: 20 de maio de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ombudsman;