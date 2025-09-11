import S from './terms.module.scss';

const Terms = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.disclaimer}>
                        <p className={S.text}>
                            As taxas de securitização variam conforme análise de risco do cedente e qualidade dos recebíveis. As operações estão sujeitas à aprovação e due diligence completa.
                        </p>
                        <p className={S.text}>
                            Todas as operações são estruturadas conforme regulamentação da CVM e Banco Central. Rentabilidade passada não garante resultados futuros. Os valores e prazos apresentados são meramente ilustrativos e podem variar conforme análise específica de cada operação.
                        </p>
                    </div>

                    <div className={S.legalInfo}>
                        <div className={S.numberedList}>
                            <p className={S.listItem}>
                                <span className={S.number}>1.</span>
                                Ranking baseado em dados públicos da CVM sobre securitizadoras registradas no Brasil, considerando volume de operações estruturadas no período de 2023-2024.
                            </p>

                            <p className={S.listItem}>
                                <span className={S.number}>2.</span>
                                Volume total em operações de securitização inclui recebíveis do agronegócio, imobiliários, financeiros e comerciais desde o início das atividades em 2020.
                            </p>

                            <p className={S.listItem}>
                                <span className={S.number}>3.</span>
                                Taxa de aprovação calculada sobre operações que passaram pela análise inicial de crédito e due diligence documental completa no período de 12 meses encerrado em dezembro de 2024.
                            </p>

                            <p className={S.listItem}>
                                <span className={S.number}>4.</span>
                                Tempo médio de liberação considera operações acima de R$ 1 milhão com documentação completa e aprovação prévia do comitê de crédito interno.
                            </p>

                            <p className={S.listItem}>
                                <span className={S.number}>5.</span>
                                As operações de securitização são registradas na CVM conforme Instrução Normativa 476/09 e posteriores atualizações. Consulte o código de registro no site da CVM.
                            </p>

                            <p className={S.listItem}>
                                <span className={S.number}>6.</span>
                                A cessão fiduciária de recebíveis segue os procedimentos estabelecidos pela Lei 9.514/97 e Lei 11.076/04, garantindo proteção jurídica adequada aos investidores.
                            </p>
                        </div>

                        <div className={S.additionalInfo}>
                            <p className={S.text}>
                                A simulação apresentada neste site é meramente ilustrativa e não constitui proposta de securitização. Todas as operações dependem de análise específica de crédito e due diligence completa dos recebíveis apresentados.
                            </p>

                            <p className={S.text}>
                                Os valores mínimos para securitização variam conforme o tipo de recebível e perfil do cedente. Operações abaixo de R$ 500 mil podem não ser viáveis economicamente devido aos custos de estruturação.
                            </p>

                            <p className={S.text}>
                                A antecipação de recebíveis mediante cessão fiduciária não caracteriza operação de crédito, mas sim aquisição de direitos creditórios futuros, conforme entendimento do Banco Central.
                            </p>

                            <p className={S.text}>
                                Para operações de grande porte (+R$ 50 milhões), a estruturação pode incluir rating externo, seguro garantia e outros mecanismos de mitigação de risco conforme demanda dos investidores.
                            </p>
                        </div>

                        <div className={S.finalDisclaimer}>
                            <p className={S.text}>
                                Esta securitizadora é uma sociedade de propósito específico autorizada pela CVM para emissão de Certificados de Recebíveis (CRI/CRA) conforme Lei 9.514/97. Não somos instituição financeira e não captamos recursos do público.
                            </p>

                            <p className={S.text}>
                                Os investimentos em Certificados de Recebíveis não contam com garantia do Fundo Garantidor de Créditos (FGC) e podem resultar em perda do capital investido. Leia sempre o prospecto antes de investir.
                            </p>

                            <p className={S.text}>
                                Todas as informações divulgadas seguem os padrões de disclosure exigidos pela CVM. Relatórios mensais de performance estão disponíveis para investidores através de nosso data room seguro.
                            </p>

                            <p className={S.text}>
                                Para esclarecimentos sobre nossas operações, utilize nossos canais oficiais de atendimento ou acesse a área de Ouvidoria em conformidade com as normas da CVM para resolução de conflitos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Terms;