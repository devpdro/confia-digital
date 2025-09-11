import S from './cta-cards.module.scss';

const CTACards = () => {
    const cards = [
        {
            id: 'capital',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#1a237e" strokeWidth="2" fill="none"/>
                    <circle cx="8" cy="12" r="2" fill="#1a237e"/>
                    <path d="M14 10h4M14 14h4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2 8h20" stroke="#1a237e" strokeWidth="2"/>
                </svg>
            ),
            title: "Precisa de acesso contínuo ao capital?",
            description: "Obtenha uma linha de crédito rotativa para cobrir grandes despesas e expandir seu negócio.",
            buttonText: "Saber mais",
            backgroundColor: "blue"
        },
        {
            id: 'sba',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="6" width="18" height="12" rx="2" stroke="#1a237e" strokeWidth="2" fill="none"/>
                    <rect x="7" y="2" width="10" height="4" rx="1" stroke="#1a237e" strokeWidth="2" fill="none"/>
                    <path d="M7 10h10M7 14h8" stroke="#1a237e" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            ),
            title: "Procurando financiamento da SBA?",
            description: "Fizemos uma parceria com a Fundera by NerdWallet para ajudar você a acessar empréstimos SBA 7(a) de até US$ 350.000.",
            buttonText: "Entre em contato com as vendas",
            backgroundColor: "purple"
        }
    ];

    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.cards}>
                    {cards.map((card) => (
                        <div key={card.id} className={`${S.card} ${S[card.backgroundColor]}`}>
                            <div className={S.cardContent}>
                                <div className={S.iconWrapper}>
                                    {card.icon}
                                </div>
                                
                                <h3 className={S.title}>{card.title}</h3>
                                
                                <p className={S.description}>{card.description}</p>
                                
                                <button className={S.button}>
                                    {card.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTACards;