import S from './financing.module.scss';

const Financing = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Capital de giro para impulsionar<br />
                        o crescimento do seu negócio.
                    </h2>
                    
                    <div className={S.cards}>
                        <div className={S.card}>
                            <div className={S.cardIcon}>
                                <div className={S.iconWrapper}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="8" r="6" fill="#1a237e"/>
                                        <path d="M12 2C13.1 2 14 2.9 14 4V6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6V4C10 2.9 10.9 2 12 2Z" fill="#7c4dff"/>
                                        <circle cx="8" cy="16" r="4" fill="#7c4dff" fillOpacity="0.7"/>
                                        <text x="12" y="10" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">$</text>
                                    </svg>
                                </div>
                            </div>
                            
                            <h3 className={S.cardTitle}>Linha de Crédito Bluevine</h3>
                            
                            <ul className={S.benefitsList}>
                                <li className={S.benefit}>
                                    Financiamento flexível quando você precisa com linhas de crédito de até US$ 250 mil
                                </li>
                                <li className={S.benefit}>
                                    Condições de pagamento semanais ou mensais previsíveis
                                </li>
                                <li className={S.benefit}>
                                    Linha rotativa que se reabastece conforme você paga
                                </li>
                            </ul>
                            
                            <button className={S.cardButton}>
                                Explorar linha de crédito
                            </button>
                        </div>
                        
                        <div className={S.card}>
                            <div className={S.cardIcon}>
                                <div className={S.iconWrapper}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="6" width="16" height="12" rx="2" fill="#7c4dff"/>
                                        <rect x="6" y="8" width="4" height="3" fill="#1a237e"/>
                                        <rect x="6" y="12" width="6" height="2" fill="#1a237e"/>
                                        <rect x="6" y="15" width="8" height="1" fill="#1a237e"/>
                                        <text x="5" y="5" fill="#1a237e" fontSize="6" fontWeight="bold">$</text>
                                    </svg>
                                </div>
                            </div>
                            
                            <h3 className={S.cardTitle}>Empréstimo a prazo comercial</h3>
                            
                            <ul className={S.benefitsList}>
                                <li className={S.benefit}>
                                    Montante fixo de fundos de até US$ 500.000²
                                </li>
                                <li className={S.benefit}>
                                    Condições de reembolso previsíveis até 24 meses
                                </li>
                                <li className={S.benefit}>
                                    Financiamento feito através dos nossos parceiros de empréstimo
                                </li>
                            </ul>
                            
                            <button className={S.cardButton}>
                                Explorar empréstimo a prazo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Financing;