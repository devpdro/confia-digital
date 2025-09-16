import { motion } from 'framer-motion';
import S from './trust.module.scss';

interface TrustCard {
    icon: JSX.Element;
    title: string;
    description: string;
}

interface TrustProps {
    title?: string;
    cards?: TrustCard[];
}

const DEFAULT_CARDS: TrustCard[] = [
    {
        icon: (
            <svg className={S.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Gestão de Riscos",
        description: "Metodologia institucional com limites por sacado, rating interno dos pagadores e stress tests completos para cenários adversos."
    },
    {
        icon: (
            <svg className={S.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        title: "Compliance Total",
        description: "Base legal sólida com cessão fiduciária, conformidade LGPD e contratos validados por escritório especializado em securitização."
    },
    {
        icon: (
            <svg className={S.icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: "Transparência Operacional",
        description: "Relatórios mensais de performance, data room seguro para documentação e comunicação imediata de eventos relevantes com auditoria independente."
    }
];

const Trust: React.FC<TrustProps> = ({ 
    title = "Governança e transparência institucional.",
    cards = DEFAULT_CARDS 
}) => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        {title}
                    </motion.h2>

                    <div className={S.grid}>
                        {cards.map((card, index) => (
                            <motion.div 
                                key={index} 
                                className={S.card}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ 
                                    duration: 0.6, 
                                    ease: "easeOut", 
                                    delay: 0.2 + (index * 0.1) 
                                }}
                                whileHover={{ 
                                    y: -3, 
                                    transition: { duration: 0.3, ease: "easeOut" } 
                                }}
                            >
                                <motion.div 
                                    className={S.iconContainer}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.5, 
                                        ease: "easeOut", 
                                        delay: 0.4 + (index * 0.1) 
                                    }}
                                >
                                    {card.icon}
                                </motion.div>
                                <motion.h3 
                                    className={S.cardTitle}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: 0.5 + (index * 0.1) 
                                    }}
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p 
                                    className={S.cardDescription}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.7, 
                                        ease: "easeOut", 
                                        delay: 0.6 + (index * 0.1) 
                                    }}
                                >
                                    {card.description}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Trust;