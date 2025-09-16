import S from './contract-types.module.scss';

const ContractTypes = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Tipos de contratos que antecipamos.
                    </h2>
                    
                    <div className={S.grid}>
                        {/* Primeira linha - 3 cards */}
                        <div className={S.card}>
                            <svg viewBox="0 0 48 48" className={S.icon}>
                                <path d="M6 8h36v32H6z" fill="#010553"/>
                                <path d="M10 12h28M10 16h24M10 20h20M10 24h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <circle cx="38" cy="12" r="2" fill="white"/>
                                <path d="M12 30l6 6 12-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3 className={S.cardTitle}>Contratos de Prestação de Serviços</h3>
                            <p className={S.cardDescription}>
                                Consultorias, assessorias, serviços técnicos e profissionais com parcelas mensais definidas.
                            </p>
                        </div>

                        <div className={S.card}>
                            <svg viewBox="0 0 48 48" className={S.icon}>
                                <rect x="8" y="10" width="32" height="28" rx="4" fill="#010553"/>
                                <rect x="12" y="14" width="24" height="16" rx="2" fill="white"/>
                                <path d="M14 17h8M14 20h12M14 23h6" stroke="#010553" strokeWidth="1.5" strokeLinecap="round"/>
                                <circle cx="30" cy="17" r="1.5" fill="#010553"/>
                                <rect x="12" y="32" width="6" height="4" rx="1" fill="white"/>
                                <rect x="20" y="32" width="6" height="4" rx="1" fill="white"/>
                                <rect x="28" y="32" width="8" height="4" rx="1" fill="white"/>
                            </svg>
                            <h3 className={S.cardTitle}>Mensalidades de Software</h3>
                            <p className={S.cardDescription}>
                                SaaS, licenças de software, plataformas digitais e sistemas com cobrança recorrente.
                            </p>
                        </div>

                        <div className={S.card}>
                            <svg viewBox="0 0 48 48" className={S.icon}>
                                <path d="M10 12h28v24H10z" fill="#010553"/>
                                <path d="M14 16h20M14 20h16M14 24h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M20 28h8" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                <circle cx="32" cy="20" r="6" fill="white"/>
                                <path d="M29 17l2 2 4-4" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M24 6l-4 6 4 6 4-6z" fill="#010553"/>
                            </svg>
                            <h3 className={S.cardTitle}>Contratos de Manutenção</h3>
                            <p className={S.cardDescription}>
                                Manutenção predial, equipamentos, sistemas e serviços continuados com pagamento parcelado.
                            </p>
                        </div>

                        {/* Segunda linha - 2 cards centralizados */}
                        <div className={S.card}>
                            <svg viewBox="0 0 48 48" className={S.icon}>
                                <rect x="6" y="14" width="36" height="20" rx="3" fill="#010553"/>
                                <path d="M10 18h28M10 22h24M10 26h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <circle cx="24" cy="6" r="4" fill="#010553"/>
                                <path d="M24 10l-8 4M24 10l8 4M24 10v4" stroke="#010553" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M12 38l6-6 6 6M30 38l6-6 6 6" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <h3 className={S.cardTitle}>Contratos de Marketing</h3>
                            <p className={S.cardDescription}>
                                Publicidade, marketing digital, campanhas e serviços de comunicação com parcelas definidas.
                            </p>
                        </div>

                        <div className={S.card}>
                            <svg viewBox="0 0 48 48" className={S.icon}>
                                <path d="M8 16h32v20H8z" fill="#010553"/>
                                <path d="M12 20h24M12 24h20M12 28h16M12 32h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M24 4l-8 12h16z" fill="#010553"/>
                                <circle cx="24" cy="10" r="2" fill="white"/>
                                <rect x="20" y="38" width="8" height="6" fill="#010553"/>
                                <path d="M16 38h4M28 38h4" stroke="#010553" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <h3 className={S.cardTitle}>Contratos Governamentais</h3>
                            <p className={S.cardDescription}>
                                Contratos com órgãos públicos municipais, estaduais e federais com condições especiais.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContractTypes;