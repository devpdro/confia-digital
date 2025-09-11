import S from './benefits.module.scss';

const Benefits = () => {
    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#1a237e" strokeWidth="2" fill="none"/>
                    <path d="M12 6v6l4 2" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Processo rápido e simples.",
            description: "Solicite facilmente e obtenha uma decisão sobre um empréstimo a prazo em até 24 horas."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="15" rx="2" stroke="#1a237e" strokeWidth="2" fill="none"/>
                    <path d="M7 8h10M7 12h8M7 16h6" stroke="#1a237e" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="15" y="2" width="4" height="6" rx="1" fill="#1a237e"/>
                </svg>
            ),
            title: "Termos claros e diretos.",
            description: "Faça os pagamentos em um cronograma previsível de até 24 meses."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="#1a237e" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="3" fill="#1a237e"/>
                </svg>
            ),
            title: "Liberdade e flexibilidade.",
            description: "Use fundos para cobrir custos operacionais ou aproveitar oportunidades de crescimento."
        }
    ];

    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.benefits}>
                    {benefits.map((benefit, index) => (
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