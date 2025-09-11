import S from './credit-benefits.module.scss';

const CreditBenefits = () => {
    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Sem anuidade",
            description: "Invista menos em taxas anuais e mais em escala e crescimento."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                    <circle cx="8" cy="12" r="2" fill="white"/>
                    <path d="M14 10h4M14 14h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2 8h20" stroke="white" strokeWidth="2"/>
                </svg>
            ),
            title: "1,5% de dinheiro de volta",
            description: "Ganhe 1,5% de dinheiro de volta ilimitado em compras comerciais diárias."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3v18l4-4 4 4 4-4 4 4V3" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M7 8h10M7 12h8M7 16h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Construir crédito empresarial",
            description: "Melhore o crédito da sua empresa com pagamentos consistentes e pontuais."
        }
    ];

    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.titleSection}>
                        <h2 className={S.title}>
                            Economize, ganhe<br />
                            e construa seu<br />
                            crédito comercial.
                        </h2>
                    </div>
                    
                    <div className={S.benefitsSection}>
                        <div className={S.benefits}>
                            {benefits.map((benefit, index) => (
                                <div key={index} className={S.benefit}>
                                    <div className={S.iconWrapper}>
                                        {benefit.icon}
                                    </div>
                                    <div className={S.benefitContent}>
                                        <h3 className={S.benefitTitle}>{benefit.title}</h3>
                                        <p className={S.benefitDescription}>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreditBenefits;