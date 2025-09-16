import { motion } from 'framer-motion';
import S from './contract-types.module.scss';

interface ContractCard {
    icon: JSX.Element;
    title: string;
    description: string;
}

interface ContractTypesProps {
    title?: string;
    cards?: ContractCard[];
}

const DEFAULT_CARDS: ContractCard[] = [
    {
        icon: (
            <motion.svg 
                viewBox="0 0 48 48" 
                className={S.icon}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
                <path d="M6 8h36v32H6z" fill="#010553"/>
                <path d="M10 12h28M10 16h24M10 20h20M10 24h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="38" cy="12" r="2" fill="white"/>
                <path d="M12 30l6 6 12-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        ),
        title: "Contratos de Prestação de Serviços",
        description: "Consultorias, assessorias, serviços técnicos e profissionais com parcelas mensais definidas."
    },
    {
        icon: (
            <motion.svg 
                viewBox="0 0 48 48" 
                className={S.icon}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
                <rect x="8" y="10" width="32" height="28" rx="4" fill="#010553"/>
                <rect x="12" y="14" width="24" height="16" rx="2" fill="white"/>
                <path d="M14 17h8M14 20h12M14 23h6" stroke="#010553" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="30" cy="17" r="1.5" fill="#010553"/>
                <rect x="12" y="32" width="6" height="4" rx="1" fill="white"/>
                <rect x="20" y="32" width="6" height="4" rx="1" fill="white"/>
                <rect x="28" y="32" width="8" height="4" rx="1" fill="white"/>
            </motion.svg>
        ),
        title: "Mensalidades de Software",
        description: "SaaS, licenças de software, plataformas digitais e sistemas com cobrança recorrente."
    },
    {
        icon: (
            <motion.svg 
                viewBox="0 0 48 48" 
                className={S.icon}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
                <path d="M10 12h28v24H10z" fill="#010553"/>
                <path d="M14 16h20M14 20h16M14 24h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 28h8" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="32" cy="20" r="6" fill="white"/>
                <path d="M29 17l2 2 4-4" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 6l-4 6 4 6 4-6z" fill="#010553"/>
            </motion.svg>
        ),
        title: "Contratos de Manutenção",
        description: "Manutenção predial, equipamentos, sistemas e serviços continuados com pagamento parcelado."
    },
    {
        icon: (
            <motion.svg 
                viewBox="0 0 48 48" 
                className={S.icon}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
            >
                <rect x="6" y="14" width="36" height="20" rx="3" fill="#010553"/>
                <path d="M10 18h28M10 22h24M10 26h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="6" r="4" fill="#010553"/>
                <path d="M24 10l-8 4M24 10l8 4M24 10v4" stroke="#010553" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 38l6-6 6 6M30 38l6-6 6 6" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
        ),
        title: "Contratos de Marketing",
        description: "Publicidade, marketing digital, campanhas e serviços de comunicação com parcelas definidas."
    },
    {
        icon: (
            <motion.svg 
                viewBox="0 0 48 48" 
                className={S.icon}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            >
                <path d="M8 16h32v20H8z" fill="#010553"/>
                <path d="M12 20h24M12 24h20M12 28h16M12 32h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 4l-8 12h16z" fill="#010553"/>
                <circle cx="24" cy="10" r="2" fill="white"/>
                <rect x="20" y="38" width="8" height="6" fill="#010553"/>
                <path d="M16 38h4M28 38h4" stroke="#010553" strokeWidth="2" strokeLinecap="round"/>
            </motion.svg>
        ),
        title: "Contratos Governamentais",
        description: "Contratos com órgãos públicos municipais, estaduais e federais com condições especiais."
    }
];

const ContractTypes: React.FC<ContractTypesProps> = ({ 
    title = "Tipos de contratos que antecipamos.",
    cards = DEFAULT_CARDS 
}) => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h2 
                        className={S.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        {title}
                    </motion.h2>
                    
                    <motion.div 
                        className={S.grid}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        {cards.map((card, index) => (
                            <motion.div 
                                key={index}
                                className={S.card}
                                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + (index * 0.1) }}
                                whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                            >
                                {card.icon}
                                <h3 className={S.cardTitle}>{card.title}</h3>
                                <p className={S.cardDescription}>
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContractTypes;