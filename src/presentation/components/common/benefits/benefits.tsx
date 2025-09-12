import S from './benefits.module.scss';

const BENEFITS_DATA = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 9l-5 5-4-4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="14" r="2" fill="#1a237e"/>
                <circle cx="13" cy="10" r="2" fill="#1a237e"/>
                <path d="M7 7h3v3" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: "Sem impacto no balanço",
        description: "Operação de cessão de recebíveis que não gera endividamento na empresa, preservando sua capacidade de crédito."
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#010553" strokeWidth="2" fill="none" />
                <path d="M12 6v6l4 2" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Liquidação em até 48h",
        description: "Análise expressa dos seus recebíveis e liberação do capital em até 48 horas após aprovação da documentação."
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#1a237e"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
        title: "Proteção jurídica total",
        description: "Cessão fiduciária registrada em cartório garante segurança jurídica e proteção contra riscos de cobrança."
    }
];

const Benefits = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.benefits}>
                    {BENEFITS_DATA.map((benefit, index) => (
                        <div key={index} className={S.benefit}>
                            <div className={S.iconWrapper}>
                                {benefit.icon}
                            </div>
                            <h3 className={S.title}>{benefit.title}</h3>
                            <p className={S.description}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;