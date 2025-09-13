import S from './contract-types.module.scss';

const ContractTypes = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Descubra o melhor financiamento para o seu negócio.
                    </h2>
                    
                    <div className={S.grid}>
                        {/* Primeira linha - 3 cards */}
                        <div className={S.card}>
                            <div className={S.iconWrapper}>
                                <svg viewBox="0 0 48 48" className={S.icon}>
                                    <circle cx="24" cy="24" r="20" fill="#1a237e"/>
                                    <path d="M24 8v8M24 32v8M8 24h8M32 24h8" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                    <circle cx="24" cy="24" r="6" fill="white"/>
                                    <text x="24" y="28" textAnchor="middle" fill="#1a237e" fontSize="8" fontWeight="bold">$</text>
                                </svg>
                            </div>
                            <h3 className={S.cardTitle}>Acesse o financiamento que você precisa</h3>
                            <p className={S.cardDescription}>
                                Empréstimos comerciais com taxas de juros e condições de pagamento competitivas.
                            </p>
                        </div>

                        <div className={S.card}>
                            <div className={S.iconWrapper}>
                                <svg viewBox="0 0 48 48" className={S.icon}>
                                    <circle cx="24" cy="24" r="20" fill="#1a237e"/>
                                    <path d="M16 20h16M20 16v16M28 16v16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                    <circle cx="24" cy="24" r="4" fill="white"/>
                                    <path d="M20 28l4-4 4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                </svg>
                            </div>
                            <h3 className={S.cardTitle}>Economize tempo com uma aplicação fácil</h3>
                            <p className={S.cardDescription}>
                                Uma única solicitação de empréstimo empresarial e decisão rápida.*
                            </p>
                        </div>

                        <div className={S.card}>
                            <div className={S.iconWrapper}>
                                <svg viewBox="0 0 48 48" className={S.icon}>
                                    <path d="M24 4L4 14v20c0 11.1 7.68 19.48 18 22 10.32-2.52 18-10.9 18-22V14L24 4z" fill="#1a237e"/>
                                    <circle cx="24" cy="26" r="8" fill="white"/>
                                    <path d="M20 26l3 3 6-6" stroke="#1a237e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                </svg>
                            </div>
                            <h3 className={S.cardTitle}>Aplicar sem impacto no crédito pessoal</h3>
                            <p className={S.cardDescription}>
                                Envie uma solicitação sem impacto no seu crédito pessoal.
                            </p>
                        </div>

                        {/* Segunda linha - 2 cards centralizados */}
                        <div className={S.card}>
                            <div className={S.iconWrapper}>
                                <svg viewBox="0 0 48 48" className={S.icon}>
                                    <circle cx="24" cy="24" r="20" fill="#1a237e"/>
                                    <path d="M14 24h20M24 14v20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                    <circle cx="18" cy="18" r="3" fill="white"/>
                                    <circle cx="30" cy="18" r="3" fill="white"/>
                                    <circle cx="18" cy="30" r="3" fill="white"/>
                                    <circle cx="30" cy="30" r="3" fill="white"/>
                                    <path d="M16 32c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" fill="none"/>
                                </svg>
                            </div>
                            <h3 className={S.cardTitle}>Ganhe liberdade e flexibilidade</h3>
                            <p className={S.cardDescription}>
                                Use seu empréstimo para qualquer coisa, desde investimentos até reserva de fluxo de pagamento e muito mais.
                            </p>
                        </div>

                        <div className={S.card}>
                            <div className={S.iconWrapper}>
                                <svg viewBox="0 0 48 48" className={S.icon}>
                                    <circle cx="24" cy="24" r="20" fill="#1a237e"/>
                                    <path d="M12 24l6 6 12-12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                    <circle cx="16" cy="16" r="2" fill="white"/>
                                    <circle cx="32" cy="16" r="2" fill="white"/>
                                    <circle cx="24" cy="32" r="2" fill="white"/>
                                    <path d="M20 12h8M16 20h16M20 36h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className={S.cardTitle}>Abra novas oportunidades</h3>
                            <p className={S.cardDescription}>
                                Empresas de propriedade de mulheres, empresas de propriedade de minorias e empreendedores veteranos são incentivados a se inscrever.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContractTypes;