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
        buttonText: "Antecipar recebíveis",
        link: "/antecipacao-de-recebiveis",
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
    },
    {
        id: 'capital-giro',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#1a237e" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8L12 4L16 8" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 16L12 20L16 16" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Capital de giro para impulsionar seu negócio",
        description: "Recursos financeiros flexíveis para cobrir despesas operacionais, investir em crescimento e aproveitar oportunidades de mercado. Soluções sob medida para sua empresa.",
        buttonText: "Solicitar capital de giro",
        link: "/capital-de-giro",
        backgroundColor: "green"
    },
    {
        id: 'conta-escrow',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="#1a237e" strokeWidth="2" />
                <path d="M3 10H21" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 4V8" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 4V8" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" />
                <path d="M9 14L12 17L15 14" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="19" r="1.5" fill="#1a237e" />
            </svg>
        ),
        title: "Conta Escrow: segurança em suas transações",
        description: "Proteja negociações complexas com uma conta de garantia. Os fundos ficam seguros até o cumprimento de todas as condições acordadas, garantindo transparência e confiança para todas as partes.",
        buttonText: "Conhecer Conta Escrow",
        link: "/conta-escrow",
        backgroundColor: "orange"
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
                                            width="275px"
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