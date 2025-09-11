import S from './trust.module.scss';

const Trust = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Governança e transparência institucional.
                    </h2>

                    <div className={S.grid}>
                        <div className={S.card}>
                            <div className={S.iconContainer}>
                                <svg className={S.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className={S.cardTitle}>Gestão de Riscos</h3>
                            <p className={S.cardDescription}>
                                Metodologia institucional com limites por sacado, rating interno dos pagadores e stress tests completos para cenários adversos.
                            </p>
                        </div>

                        <div className={S.card}>
                            <div className={S.iconContainer}>
                                <svg className={S.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="16" r="1" fill="currentColor" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className={S.cardTitle}>Compliance Total</h3>
                            <p className={S.cardDescription}>
                                Base legal sólida com cessão fiduciária, conformidade LGPD e contratos validados por escritório especializado em securitização.
                            </p>
                        </div>

                        <div className={S.card}>
                            <div className={S.iconContainer}>
                                <svg className={S.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13 8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M17 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className={S.cardTitle}>Transparência Operacional</h3>
                            <p className={S.cardDescription}>
                                Relatórios mensais de performance, data room seguro para documentação e comunicação imediata de eventos relevantes com auditoria independente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;