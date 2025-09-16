import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';
import S from './credit-access.module.scss';

interface CreditAccessCard {
    image: any;
    alt: string;
    title: string;
    description: string;
    link?: string;
}

interface CreditAccessProps {
    title?: string;
    subtitle?: string;
    cards?: CreditAccessCard[];
}

const DEFAULT_CREDIT_ACCESS_DATA = [
    {
        image: IMAGE.PAPEL,
        alt: "Ícone de documentos e papéis",
        title: "Sem impacto no balanço",
        description: "Operação de cessão de recebíveis que não gera endividamento na empresa, preservando sua capacidade de crédito."
    },
    {
        image: IMAGE.MONEY_VOLTA,
        alt: "Ícone de dinheiro e retorno financeiro",
        title: "Até 85% do valor presente",
        description: "Antecipamos até 85% do valor dos seus recebíveis com base na qualidade dos sacados e prazo médio de pagamento."
    },
    {
        image: IMAGE.PROTECAO,
        alt: "Ícone de proteção e segurança",
        title: "Proteção jurídica total",
        description: "Cessão fiduciária registrada em cartório garante segurança jurídica e proteção contra riscos de cobrança."
    }
];

const CreditAccess: React.FC<CreditAccessProps> = ({ 
    title = "Acesso rápido e fácil a uma linha de crédito empresarial.",
    subtitle = "Acesse o financiamento flexível que você precisa para administrar e expandir seu negócio sem problemas, com taxas de juros competitivas e pagamentos automáticos.",
    cards = DEFAULT_CREDIT_ACCESS_DATA
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
                    <motion.div 
                        className={S.header}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    >
                        <h2 className={S.title}>
                            {title}
                        </h2>
                        <p className={S.subtitle}>
                            {subtitle}
                        </p>
                    </motion.div>

                    <div className={S.cards}>
                        {cards.map((item: CreditAccessCard, index: number) => (
                            <motion.div 
                                key={index} 
                                className={S.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5, 
                                    ease: "easeOut", 
                                    delay: 0.2 + (index * 0.1) 
                                }}
                                whileHover={{ 
                                    y: -2, 
                                    transition: { duration: 0.2, ease: "easeOut" } 
                                }}
                            >
                                {item.link ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={S.cardLink}>
                                        <div className={S.iconWrapper}>
                                            <img src={item.image.src} alt={item.alt} />
                                        </div>
                                        <h3 className={S.cardTitle}>{item.title}</h3>
                                        <p className={S.cardDescription}>
                                            {item.description}
                                        </p>
                                    </a>
                                ) : (
                                    <>
                                        <div className={S.iconWrapper}>
                                            <img src={item.image.src} alt={item.alt} />
                                        </div>
                                        <h3 className={S.cardTitle}>{item.title}</h3>
                                        <p className={S.cardDescription}>
                                            {item.description}
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CreditAccess;