import S from 'src/presentation/styles/shared/policy-page.module.scss';

const PrivacyPolicy = () => {
    return (
        <div className={S.page}>
            <div className={S.container}>
                <header className={S.header}>
                    <div className={S.headerWrapper}>
                        <h1 className={S.title}>Política de Privacidade</h1>
                    </div>
                </header>
                
                <div className={S.content}>
                    <div className={S.contentWrapper}>
                        <section className={S.section}>
                            <p className={S.paragraph}>
                                Esta Política de Privacidade descreve como a <strong>Bluevine Capital Inc.</strong> coleta, usa, armazena e protege suas informações pessoais quando você utiliza nossos serviços financeiros e acessa nosso site.
                            </p>
                            
                            <p className={S.paragraph}>
                                Estamos comprometidos em proteger sua privacidade e garantir a segurança de suas informações pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD) e demais regulamentações aplicáveis.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Informações que Coletamos</h2>
                            <p className={S.paragraph}>
                                Coletamos informações pessoais necessárias para fornecer nossos serviços financeiros, incluindo dados de identificação, informações financeiras, dados de contato e informações sobre seu negócio.
                            </p>
                            
                            <p className={S.paragraph}>
                                Também coletamos informações automaticamente através de cookies e tecnologias similares quando você navega em nosso site, incluindo endereço IP, tipo de navegador e páginas visitadas.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Como Usamos suas Informações</h2>
                            <p className={S.paragraph}>
                                Utilizamos suas informações para processar solicitações de crédito, avaliar riscos, cumprir obrigações regulatórias, prevenir fraudes e melhorar nossos serviços.
                            </p>
                            
                            <p className={S.paragraph}>
                                Suas informações também podem ser usadas para comunicação sobre nossos produtos e serviços, sempre respeitando suas preferências de comunicação.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Compartilhamento de Informações</h2>
                            <p className={S.paragraph}>
                                Não vendemos suas informações pessoais. Compartilhamos informações apenas quando necessário para prestação de serviços, cumprimento de obrigações legais ou com seu consentimento explícito.
                            </p>
                            
                            <p className={S.paragraph}>
                                Podemos compartilhar informações com parceiros de negócios, prestadores de serviços e órgãos reguladores, sempre mantendo contratos de confidencialidade apropriados.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Segurança dos Dados</h2>
                            <p className={S.paragraph}>
                                Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                            </p>
                            
                            <p className={S.paragraph}>
                                Utilizamos criptografia, controles de acesso e monitoramento contínuo para garantir a segurança de seus dados pessoais.
                            </p>
                        </section>
                        
                        <section className={S.section}>
                            <h2 className={S.sectionTitle}>Seus Direitos</h2>
                            <p className={S.paragraph}>
                                Você tem o direito de acessar, corrigir, excluir ou portar suas informações pessoais. Também pode solicitar a limitação do processamento ou se opor ao tratamento de seus dados.
                            </p>
                            
                            <p className={S.paragraph}>
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco através dos canais disponibilizados em nosso site.
                            </p>
                            
                            <p className={S.lastUpdated}>
                                Esta Política de Privacidade está em vigor desde: 15 de março de 2024.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;