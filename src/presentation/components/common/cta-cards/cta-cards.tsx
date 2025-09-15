import { Button } from '../../form';
import Link from 'next/link';
import S from './cta-cards.module.scss';

const cards = [
    {
        id: 'recebiveis',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Transforme recebíveis em capital imediato",
        description: "Securitização de duplicatas e contratos a partir de R$ 500 mil. Liquidez em até 48h sem comprometer o balanço patrimonial.",
        buttonText: "Securitizar recebíveis",
        link: "/securitizacao-de-recebiveis",
        backgroundColor: "blue"
    },
    {
        id: 'antecipacao',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#1a237e" strokeWidth="2" />
                <polyline points="12,6 12,12 16,14" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 2L20 6L16 10" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 6H12" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Antecipe contratos assinados hoje mesmo",
        description: "Receba de R$ 50K a R$ 2M no mesmo dia. Contratos de prestação de serviços viram capital em até 6 horas úteis.",
        buttonText: "Antecipar contratos",
        link: "/antecipacao-de-contratos",
        backgroundColor: "purple"
    }
];

const CTACards = () => {
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

                                <Link href={card.link}>
                                    <Button
                                        typeStyle="btn1"
                                        label={card.buttonText}
                                        size="md"
                                        width="250px"
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTACards;