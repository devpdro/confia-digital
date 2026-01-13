import { Meta, LegalPageSection } from "src/presentation/components";

import S from 'src/presentation/styles/shared/legal-page.module.scss';

const TermsOfUse = () => {
    return (
        <>
            <Meta
                title="Termos de Uso | Confia Capital"
                description="Termos de uso dos serviços de securitização de recebíveis da Confia Capital Securitizadora S.A. Conheça as condições para utilização de nossos serviços."
                keywords="termos de uso, securitização de recebíveis, Confia Capital, condições de uso, cessão fiduciária"
            />
            <div className={S.page}>
                <div className={S.container}>
                    <main className={S.content}>
                        <header className={S.header}>
                            <h1 className={S.title}>Termos de Uso</h1>
                        </header>

                        <LegalPageSection
                            id="introducao"
                            number={1}
                            title="INTRODUÇÃO"
                            defaultExpanded={true}
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Os seguintes termos de uso (" <strong>Termos</strong> ") regem o uso do site confiacapital.com.br (o " <strong>Site</strong> ") e/ou quaisquer dos serviços (os " <strong>Serviços</strong> ") oferecidos pela Confia Capital Securitizadora S.A. (" <strong>Confia Capital</strong> ") em e por meio do nosso Site, incluindo operações de securitização de recebíveis, cessão fiduciária e demais produtos financeiros oferecidos.
                                    </p>
                                    <p className={S.paragraph}>
                                        Leia atentamente os requisitos destes Termos. O uso do Site e/ou de qualquer um dos Serviços constitui sua concordância em cumprir os termos deste documento. Caso não concorde com estes Termos e seus requisitos, você estará expressamente proibido de usar o Site e/ou os Serviços e deverá sair do Site imediatamente.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="uso-site-servicos"
                            number={2}
                            title="USO DO SITE E SERVIÇOS"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Você poderá visualizar e utilizar o Site e/ou qualquer informação nele contida somente de acordo com estes Termos. Você não poderá modificar, distribuir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação ou conteúdo contido no Site. O Site poderá ser utilizado somente conforme previsto nestes Termos. Você concorda em utilizar o Site somente para fins lícitos relacionados aos serviços de securitização e reconhece que a omissão em fazê-lo poderá sujeitá-lo a responsabilidade civil e criminal.
                                    </p>
                                    <p className={S.paragraph}>
                                        Para utilizar nossos Serviços de securitização de recebíveis, você precisará nos fornecer informações sobre sua empresa, incluindo dados financeiros, demonstrativos contábeis, informações sobre recebíveis, histórico de inadimplência e demais documentos necessários para análise de crédito. Também poderemos solicitar acesso às suas informações bancárias, consultar órgãos de proteção ao crédito e coletar dados de terceiros sobre sua empresa e seus sacados (coletivamente, as "Informações Empresariais").
                                    </p>
                                    <p className={S.paragraph}>
                                        Ao solicitar nossos serviços, você declara e garante que: (i) possui capacidade jurídica para contratar; (ii) as Informações Empresariais são verdadeiras, precisas, atuais e completas; (iii) manterá e atualizará as informações para mantê-las verdadeiras e precisas; (iv) possui legitimidade sobre os recebíveis apresentados para securitização; e (v) os recebíveis não possuem ônus, gravames ou restrições que impeçam sua cessão fiduciária.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="alteracoes-termos"
                            number={3}
                            title="ALTERAÇÕES NOS TERMOS"
                            content={
                                <p className={S.paragraph}>
                                    A Confia Capital reserva-se o direito de, a qualquer momento, modificar, alterar ou atualizar estes Termos, mediante comunicação prévia de 30 (trinta) dias através do Site ou por e-mail. A data da revisão mais recente aparecerá nesta página. Seu acesso contínuo ao Site e o uso dos Serviços constituirão sua aceitação de quaisquer alterações. Operações de securitização já contratadas permanecerão regidas pelos termos vigentes na data de sua contratação.
                                </p>
                            }
                        />

                        <LegalPageSection
                            id="isencao-responsabilidade"
                            number={4}
                            title="ISENÇÃO DE RESPONSABILIDADE"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        As informações disponibilizadas no Site têm caráter meramente informativo e educacional sobre securitização de recebíveis. A Confia Capital não se responsabiliza por decisões de investimento ou operações baseadas exclusivamente nas informações do Site. Todas as operações de securitização estão sujeitas à análise de crédito, due diligence e aprovação interna, podendo ser recusadas a critério da Confia Capital.
                                    </p>
                                    <p className={S.paragraph}>
                                        Os Serviços são fornecidos de acordo com a regulamentação da Comissão de Valores Mobiliários (CVM) e demais órgãos reguladores. A Confia Capital não garante a aprovação de operações de securitização, taxas específicas ou prazos de liberação de recursos. Todas as condições estão sujeitas à análise individual de cada operação e às condições de mercado vigentes.
                                    </p>
                                    <p className={S.paragraph}>
                                        A Confia Capital não se responsabiliza por inadimplência dos sacados, alterações na legislação que afetem as operações, ou eventos de força maior que impeçam o cumprimento das obrigações. O Site pode apresentar indisponibilidades temporárias para manutenção ou atualizações, sem que isso gere direito à indenização.
                                    </p>
                                </>
                            }
                        />

                        <LegalPageSection
                            id="limitacao-responsabilidade"
                            number={5}
                            title="LIMITAÇÃO DE RESPONSABILIDADE"
                            content={
                                <p className={S.paragraph}>
                                    A responsabilidade da Confia Capital, em qualquer hipótese, fica limitada ao valor efetivamente pago pelo cliente pelos serviços contratados. Em nenhuma hipótese a Confia Capital será responsável por danos indiretos, lucros cessantes, perda de oportunidade de negócio, danos morais ou quaisquer outros danos especiais, consequenciais ou incidentais, ainda que tenha sido avisada da possibilidade de tais perdas ou danos. Esta limitação aplica-se independentemente da teoria legal invocada.
                                </p>
                            }
                        />

                        <LegalPageSection
                            id="politica-privacidade"
                            number={6}
                            title="POLÍTICA DE PRIVACIDADE"
                            content={
                                <p className={S.paragraph}>
                                    A coleta, tratamento e proteção de dados pessoais e empresariais são regidos por nossa Política de Privacidade, disponível no Site e incorporada por referência a estes Termos. O uso do Site e dos Serviços constitui sua concordância com o tratamento de dados conforme descrito na Política de Privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                                </p>
                            }
                        />

                        <LegalPageSection
                            id="propriedade-intelectual"
                            number={7}
                            title="PROPRIEDADE INTELECTUAL"
                            content={
                                <p className={S.paragraph}>
                                    O Site e todo seu conteúdo, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, são de propriedade da Confia Capital ou de seus fornecedores de conteúdo e são protegidos pelas leis brasileiras e internacionais de direitos autorais e marcas registradas. É vedada a reprodução, distribuição ou uso comercial do conteúdo sem autorização expressa.
                                </p>
                            }
                        />

                        <LegalPageSection
                            id="jurisdicao-lei"
                            number={8}
                            title="JURISDIÇÃO E LEI APLICÁVEL"
                            content={
                                <p className={S.paragraph}>
                                    Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer controvérsia decorrente destes Termos será submetida ao foro da Comarca de São Paulo, Estado de São Paulo, com renúncia expressa a qualquer outro, por mais privilegiado que seja. As operações de securitização estão sujeitas à regulamentação da CVM e demais órgãos competentes.
                                </p>
                            }
                        />

                        <LegalPageSection
                            id="disposicoes-gerais"
                            number={9}
                            title="DISPOSIÇÕES GERAIS"
                            content={
                                <>
                                    <p className={S.paragraph}>
                                        Estes Termos constituem o acordo integral entre você e a Confia Capital relativamente ao uso do Site e dos Serviços. Caso alguma disposição destes Termos seja considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor. A tolerância da Confia Capital quanto ao descumprimento de qualquer disposição não constituirá renúncia ao direito de exigir seu cumprimento.
                                    </p>
                                    <p className={S.paragraph}>
                                        Para dúvidas, sugestões ou solicitações relacionadas a estes Termos, entre em contato conosco através do e-mail contato@confiacapital.com.br ou pelos canais de atendimento disponíveis no Site.
                                    </p>
                                    <p className={S.lastUpdated}>
                                        Estes Termos de Uso estão em vigor desde: 15 de janeiro de 2024.
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

export default TermsOfUse;