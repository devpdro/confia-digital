import { Meta } from "src/presentation/components";

import S from 'src/presentation/styles/shared/policy-page.module.scss';

const PrivacyPolicy = () => {
    return (
        <>
            <Meta
                title="Política de Privacidade | Confia Capital"
                description="Política de privacidade da Confia Capital Securitizadora. Como coletamos, tratamos e protegemos seus dados pessoais em conformidade com a LGPD."
                keywords="política de privacidade, LGPD, proteção de dados, securitização, Confia Capital, dados pessoais"
            />
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
                                    Esta Política de Privacidade descreve como a <strong>Confia Capital Securitizadora S.A.</strong> coleta, trata, armazena e protege seus dados pessoais e empresariais quando você utiliza nossos serviços de securitização de recebíveis e acessa nosso site confiacapital.com.br.
                                </p>

                                <p className={S.paragraph}>
                                    Estamos comprometidos em proteger sua privacidade e garantir a segurança de suas informações em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), regulamentações da Comissão de Valores Mobiliários (CVM) e demais normas aplicáveis ao mercado de capitais.
                                </p>
                            </section>

                            <section className={S.section}>
                                <h2 className={S.sectionTitle}>Dados Pessoais e Empresariais que Coletamos</h2>
                                <p className={S.paragraph}>
                                    Para operações de securitização de recebíveis, coletamos dados empresariais como CNPJ, razão social, demonstrações financeiras, informações sobre recebíveis, histórico de inadimplência, dados dos sacados e representantes legais. Também coletamos dados pessoais dos sócios e administradores, incluindo CPF, RG, comprovante de residência e informações de contato.
                                </p>

                                <p className={S.paragraph}>
                                    Automaticamente, coletamos dados de navegação através de cookies e tecnologias similares, incluindo endereço IP, tipo de dispositivo, páginas visitadas, tempo de permanência e origem do acesso, para melhorar a experiência do usuário e garantir a segurança da plataforma.
                                </p>
                            </section>

                            <section className={S.section}>
                                <h2 className={S.sectionTitle}>Finalidades do Tratamento de Dados</h2>
                                <p className={S.paragraph}>
                                    Tratamos seus dados para: (i) análise de crédito e due diligence dos recebíveis; (ii) estruturação de operações de securitização; (iii) cumprimento de obrigações regulatórias perante CVM, Banco Central e Receita Federal; (iv) prevenção à lavagem de dinheiro e financiamento ao terrorismo; (v) gestão de riscos e controles internos; e (vi) execução de contratos de cessão fiduciária.
                                </p>

                                <p className={S.paragraph}>
                                    Também utilizamos os dados para comunicação sobre o andamento das operações, envio de relatórios de performance, oferecimento de novos produtos adequados ao seu perfil e cumprimento de obrigações contratuais, sempre com base em legítimo interesse ou consentimento quando aplicável.
                                </p>
                            </section>

                            <section className={S.section}>
                                <h2 className={S.sectionTitle}>Compartilhamento de Dados</h2>
                                <p className={S.paragraph}>
                                    Não comercializamos seus dados pessoais. Compartilhamos dados apenas quando necessário para: (i) estruturação de operações com investidores qualificados; (ii) prestação de serviços por terceiros especializados (escritórios de advocacia, auditorias, agências de rating); (iii) cumprimento de determinações judiciais ou de órgãos reguladores; e (iv) execução de contratos de cessão fiduciária.
                                </p>

                                <p className={S.paragraph}>
                                    Todos os terceiros que acessam seus dados estão vinculados por contratos de confidencialidade e obrigações de proteção de dados equivalentes às nossas. O compartilhamento com investidores ocorre apenas mediante anonimização ou pseudonimização quando possível, preservando informações comercialmente sensíveis.
                                </p>
                            </section>

                            <section className={S.section}>
                                <h2 className={S.sectionTitle}>Segurança e Proteção de Dados</h2>
                                <p className={S.paragraph}>
                                    Implementamos medidas técnicas e organizacionais rigorosas, incluindo: (i) criptografia de dados em trânsito e em repouso; (ii) controles de acesso baseados em funções e necessidade de conhecer; (iii) monitoramento 24/7 de segurança cibernética; (iv) backups seguros e planos de continuidade de negócios; e (v) auditorias regulares de segurança da informação.
                                </p>

                                <p className={S.paragraph}>
                                    Nossos sistemas atendem aos padrões de segurança exigidos pela CVM para instituições do mercado de capitais. Mantemos certificações de segurança da informação e realizamos testes de penetração periódicos. Em caso de incidente de segurança, seguimos protocolos de notificação conforme exigido pela LGPD e regulamentações setoriais.
                                </p>
                            </section>

                            <section className={S.section}>
                                <h2 className={S.sectionTitle}>Seus Direitos como Titular de Dados</h2>
                                <p className={S.paragraph}>
                                    Conforme a LGPD, você possui os seguintes direitos: (i) confirmação da existência de tratamento; (ii) acesso aos dados; (iii) correção de dados incompletos, inexatos ou desatualizados; (iv) anonimização, bloqueio ou eliminação de dados desnecessários; (v) portabilidade dos dados; (vi) eliminação dos dados tratados com consentimento; (vii) informação sobre compartilhamento; (viii) informação sobre possibilidade de não fornecer consentimento; e (ix) revogação do consentimento.
                                </p>

                                <p className={S.paragraph}>
                                    Para exercer seus direitos, entre em contato através do e-mail privacidade@confiacapital.com.br ou pelos canais de atendimento disponíveis no site. Ressaltamos que alguns dados podem ser mantidos por obrigações legais ou regulatórias, mesmo após solicitação de exclusão. Nosso Encarregado de Proteção de Dados está disponível para esclarecer dúvidas sobre esta política.
                                </p>

                                <p className={S.lastUpdated}>
                                    Esta Política de Privacidade está em vigor desde: 15 de janeiro de 2024.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;