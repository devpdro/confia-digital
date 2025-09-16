import S from './credit-benefits.module.scss';

const CreditBenefits = () => {
    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Aprovação em 6 horas",
            description: "Análise rápida e aprovação no mesmo dia útil para você ter o dinheiro quando precisar."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1v6m0 6v6m6-12h-6m-6 0h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
            ),
            title: "Taxa média 2,8% ao mês",
            description: "Condições competitivas do mercado com transparência total nos custos da operação."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.22.45 4.56 1.23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Sem garantias pessoais",
            description: "Operação baseada na qualidade do seu contrato, sem necessidade de avalistas ou garantias."
        }
    ];

    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.titleSection}>
                        <h2 className={S.title}>
                            Antecipe contratos<br />
                            e tenha dinheiro<br />
                            no mesmo dia.
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