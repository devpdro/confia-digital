import S from 'src/presentation/styles/shared/policy-page.module.scss';

const Partners = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Parceiros</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                A <strong>Bluevine Capital Inc.</strong> mantém uma rede estratégica de parceiros para oferecer soluções completas e especializadas aos nossos clientes, ampliando nosso alcance e capacidade de atendimento.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Programa de Parceiros</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Rede Colaborativa:</strong> Trabalhamos com consultores, contadores, advogados e instituições financeiras para criar um ecossistema integrado de serviços financeiros.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Benefícios Mútuos:</strong> Nosso programa oferece vantagens tanto para parceiros quanto para clientes, criando valor compartilhado e relacionamentos duradouros.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Tipos de Parceiros</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Consultores Financeiros:</strong><br/>
                                • Assessoria em planejamento financeiro<br/>
                                • Análise de viabilidade de projetos<br/>
                                • Estruturação de operações complexas<br/>
                                • Comissões atrativas por indicação
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Escritórios Contábeis:</strong><br/>
                                • Parceria para clientes empresariais<br/>
                                • Treinamento em produtos financeiros<br/>
                                • Suporte técnico especializado<br/>
                                • Programa de recompensas por volume
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Advogados Especialistas:</strong><br/>
                                • Suporte jurídico em operações<br/>
                                • Elaboração de contratos<br/>
                                • Compliance regulatório<br/>
                                • Rede de referência mútua
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Parceiros Institucionais</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Bancos e Cooperativas:</strong> Parcerias estratégicas para distribuição de produtos e ampliação da base de clientes em diferentes regiões do país.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Fintechs:</strong> Integração tecnológica para oferecer soluções digitais inovadoras e melhorar a experiência do cliente.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Gestoras de Recursos:</strong> Colaboração em estruturação de fundos e produtos de investimento para diversificação de portfólio.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Benefícios para Parceiros</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Comissionamento Competitivo:</strong> Estrutura de remuneração atrativa baseada em volume de negócios e performance.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Suporte Comercial:</strong> Equipe dedicada para apoio em prospecção, apresentações e fechamento de negócios.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Capacitação Contínua:</strong> Treinamentos regulares sobre produtos, mercado e regulamentação do setor financeiro.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Material de Marketing:</strong> Disponibilização de materiais promocionais, apresentações e conteúdo técnico.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Como se Tornar Parceiro</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Processo de Credenciamento:</strong><br/>
                                1. Cadastro inicial com documentação<br/>
                                2. Análise de perfil e experiência<br/>
                                3. Treinamento sobre produtos e processos<br/>
                                4. Assinatura do contrato de parceria<br/>
                                5. Início das atividades comerciais
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Requisitos para Parceria</h2>
                            
                            <p className={S.paragraph}>
                                <strong>Qualificação Técnica:</strong> Conhecimento em mercado financeiro, experiência com clientes empresariais e certificações relevantes.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Compliance:</strong> Situação regular junto aos órgãos de classe, ausência de restrições e aderência às políticas de compliance.
                            </p>
                            
                            <p className={S.paragraph}>
                                <strong>Estrutura Mínima:</strong> Capacidade de atendimento, sistema de gestão e equipe qualificada para suporte aos clientes.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Contato para Parcerias</h2>
                            
                            <p className={S.paragraph}>
                                Interessado em fazer parte da nossa rede de parceiros? Entre em contato através do e-mail parcerias@bluevine.com.br ou telefone (11) 3000-0000 ramal 200.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Programa de Parceiros atualizado em: 20 de julho de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;