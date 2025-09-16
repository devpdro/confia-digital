import { motion } from 'framer-motion';
import S from './credit-benefits.module.scss';

const CreditBenefits = () => {
    const benefits = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Aprovação em 6 horas",
            description: "Análise rápida e aprovação no mesmo dia útil para você ter o dinheiro quando precisar."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1v6m0 6v6m6-12h-6m-6 0h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
            ),
            title: "Taxa média 2,8% ao mês",
            description: "Condições competitivas do mercado com transparência total nos custos da operação."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.66 0 3.22.45 4.56 1.23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            ),
            title: "Sem garantias pessoais",
            description: "Operação baseada na qualidade do seu contrato, sem necessidade de avalistas ou garantias."
        }
    ];

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
                        className={S.titleSection}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <h2 className={S.title}>
                            Antecipe contratos<br />
                            e tenha dinheiro<br />
                            no mesmo dia.
                        </h2>
                    </motion.div>
                    
                    <motion.div 
                        className={S.benefitsSection}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className={S.benefits}>
                            {benefits.map((benefit, index) => (
                                <motion.div 
                                    key={index} 
                                    className={S.benefit}
                                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: 0.3 + (index * 0.1) 
                                    }}
                                    whileHover={{ 
                                        y: -3, 
                                        transition: { duration: 0.3, ease: "easeOut" } 
                                    }}
                                >
                                    <motion.div 
                                        className={S.iconWrapper}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeOut", 
                                            delay: 0.4 + (index * 0.1) 
                                        }}
                                    >
                                        {benefit.icon}
                                    </motion.div>
                                    <motion.div 
                                        className={S.benefitContent}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut", 
                                            delay: 0.5 + (index * 0.1) 
                                        }}
                                    >
                                        <h3 className={S.benefitTitle}>{benefit.title}</h3>
                                        <p className={S.benefitDescription}>{benefit.description}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CreditBenefits;