import S from './benefits.module.scss';

const BENEFITS_DATA = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4" stroke="#1a237e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="10" stroke="#1a237e" strokeWidth="2" fill="none" />
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="#1a237e" strokeWidth="1" />
            </svg>
        ),
        title: "Aprovação em poucas horas",
        description: "Análise simplificada baseada nos contratos já assinados. Sem necessidade de avaliar histórico complexo ou garantias adicionais."
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="6" width="20" height="12" rx="4" stroke="#1a237e" strokeWidth="2" fill="none" />
                <circle cx="8" cy="12" r="2" fill="#1a237e" />
                <circle cx="16" cy="12" r="2" fill="#1a237e" />
                <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "Valores flexíveis",
        description: "Antecipe desde R$ 50 mil até R$ 2 milhões por operação. Ideal para PMEs que precisam ajustar fluxo de caixa conforme demanda."
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="#1a237e" strokeWidth="2" fill="none" />
                <path d="M9 9h6v6H9z" fill="#1a237e" />
                <path d="M12 5v4M12 15v4M7 12h4M15 12h4" stroke="#1a237e" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        title: "Sem comprometer limite bancário",
        description: "Operação que mantém suas linhas de crédito tradicionais livres para outras necessidades estratégicas da empresa."
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