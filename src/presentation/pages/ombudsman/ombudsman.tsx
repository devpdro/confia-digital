import { Meta, LegalPageSection } from "src/presentation/components";

import S from 'src/presentation/styles/shared/legal-page.module.scss';

const Ombudsman = () => {
    return (
        <>
            <Meta
                title="Ouvidoria | Confia Capital"
                description="Ouvidoria da Confia Capital Securitizadora. Canal independente para reclamações, sugestões e esclarecimentos sobre operações de securitização."
                keywords="ouvidoria, reclamações, securitização, Confia Capital, atendimento, CVM, BACEN"
            />
            <div className={S.page}>
                <div className={S.container}>
                    <main className={S.content}>
                        <header className={S.header}>
                            <h1 className={S.title}>Ouvidoria</h1>
                        </header>

                        <LegalPageSection
                            id="introducao"
                            number={1}
                            title="INTRODUÇÃO"
                            defaultExpanded={true}
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        A Ouvidoria da <strong>Confia Capital Securitizadora S.A.</strong> é um canal independente e imparcial de comunicação entre investidores, cedentes, parceiros e a empresa, garantindo o atendimento eficiente de reclamações, denúncias, sugestões e elogios relacionados aos nossos serviços de securitização de recebíveis.
                                    </p>
                                    <p className={S.paragraph}>
                                        Em conformidade com as regulamentações da <strong>CVM</strong> e <strong>BACEN</strong>, asseguramos que todas as manifestações sejam tratadas com imparcialidade, confidencialidade e dentro dos prazos regulamentares estabelecidos, contribuindo para o aprimoramento contínuo de nossos processos e relacionamento com o mercado.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="atribuicoes"
                            number={2}
                            title="ATRIBUIÇÕES E RESPONSABILIDADES"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        A Ouvidoria atua como <strong>instância independente</strong> para mediação entre investidores, cedentes e a securitizadora, buscando soluções imparciais para questões relacionadas a operações de securitização, performance de certificados, prestação de informações e demais serviços não resolvidas pelos canais tradicionais de relacionamento.
                                    </p>
                                    <p className={S.paragraph}>
                                        Compete à Ouvidoria: (i) receber e analisar manifestações sobre operações CRI e CRA; (ii) mediar conflitos entre partes envolvidas nas operações; (iii) identificar falhas nos processos de due diligence, estruturação e gestão de carteiras; (iv) propor melhorias nos controles internos e relacionamento com investidores; e (v) elaborar relatórios periódicos para a administração e órgãos reguladores.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="canais"
                            number={3}
                            title="CANAIS DE ATENDIMENTO"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        <strong>E-mail:</strong> ouvidoria@confiacapital.com.br<br />
                                        <strong>Telefone:</strong> 0800-000-0120 (ligação gratuita)<br />
                                        <strong>WhatsApp:</strong> "(19) 98106-2535"<br />
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Horário de Atendimento:</strong> Segunda a sexta-feira, das 9h às 18h (horário de Brasília), exceto feriados nacionais. Manifestações recebidas fora do horário comercial serão processadas no próximo dia útil.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="prazos"
                            number={4}
                            title="PRAZOS REGULAMENTARES"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Conforme <strong>Instrução CVM nº 414/04</strong> e regulamentações do BACEN, todas as manifestações recebidas pela Ouvidoria são respondidas em até <strong>10 dias úteis</strong> a partir do recebimento. Para questões relacionadas a operações de securitização, o prazo de análise considera a complexidade técnica e necessidade de consulta a documentos específicos.
                                    </p>
                                    <p className={S.paragraph}>
                                        Em casos que exijam análise técnica aprofundada, consulta a agentes fiduciários, auditores externos ou órgãos reguladores, o prazo pode ser estendido por mais <strong>10 dias úteis</strong>, com comunicação prévia e justificativa ao manifestante. Questões urgentes relacionadas a eventos de pagamento ou fatos relevantes recebem tratamento prioritário.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="tipos-manifestacao"
                            number={5}
                            title="TIPOS DE MANIFESTAÇÃO"
                            content={
                                <p className={S.paragraph}>
                                    <strong>Reclamações:</strong> Insatisfação com operações de securitização, performance de certificados, prestação de informações, relacionamento com investidores ou qualidade dos serviços prestados.<br /><br />
                                    <strong>Denúncias:</strong> Comunicação de irregularidades, descumprimento de normas CVM/BACEN, conflitos de interesse, falhas em controles internos ou práticas inadequadas de mercado.<br /><br />
                                    <strong>Sugestões:</strong> Propostas de melhoria em processos de due diligence, estruturação de operações, relacionamento com investidores, transparência de informações ou inovações em produtos.<br /><br />
                                    <strong>Esclarecimentos:</strong> Dúvidas sobre operações, certificados, eventos de pagamento, relatórios de performance ou aspectos regulamentares.<br /><br />
                                    <strong>Elogios:</strong> Reconhecimento da qualidade técnica, transparência, atendimento ou excelência na estruturação de operações.
                                </p>
                            }
                        />

                        <LegalPageSection
                            id="confidencialidade"
                            number={6}
                            title="CONFIDENCIALIDADE E PROTEÇÃO DE DADOS"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Garantimos <strong>absoluta confidencialidade</strong> das informações fornecidas e proteção integral contra qualquer tipo de retaliação aos manifestantes. A identidade dos denunciantes é protegida com máximo rigor, sendo revelada apenas quando expressamente autorizada ou exigida por determinação judicial ou regulatória.
                                    </p>
                                    <p className={S.paragraph}>
                                        Todas as comunicações são tratadas com sigilo profissional e as informações pessoais são protegidas em conformidade com nossa <strong>Política de Privacidade</strong>, <strong>LGPD (Lei 13.709/2018)</strong> e regulamentações de proteção de dados do mercado de capitais. Os registros da Ouvidoria são mantidos por prazo regulamentar e disponibilizados aos órgãos supervisores quando solicitado.
                                    </p>
                                    <p className={S.paragraph}>
                                        <strong>Independência:</strong> A Ouvidoria possui autonomia técnica e operacional, reportando-se diretamente ao Conselho de Administração, garantindo imparcialidade nas análises e mediações realizadas.
                                    </p>
                                    <p className={S.lastUpdated}>
                                        Informações da Ouvidoria atualizadas em: 15 de janeiro de 2024.
                                    </p>
                                </>
                            }
                        />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Ombudsman;