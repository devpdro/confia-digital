import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from 'src/presentation/components';

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
                <motion.div
                    className={S.cards}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`${S.card} ${S[card.backgroundColor]}`}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                                delay: 0.1 + (index * 0.2)
                            }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            <div className={S.cardContent}>
                                <motion.div
                                    className={S.iconWrapper}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.2 + (index * 0.2)
                                    }}
                                >
                                    {card.icon}
                                </motion.div>

                                <motion.h3
                                    className={S.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.3 + (index * 0.2)
                                    }}
                                >
                                    {card.title}
                                </motion.h3>

                                <motion.p
                                    className={S.description}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.4 + (index * 0.2)
                                    }}
                                >
                                    {card.description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: 0.5 + (index * 0.2)
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Link href={card.link}>
                                        <Button
                                            typeStyle="btn1"
                                            label={card.buttonText}
                                            size="md"
                                            width="250px"
                                        />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CTACards;