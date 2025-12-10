import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';
import S from './escrow-benefits.module.scss';

const EscrowBenefits = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.h2 
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        Por que escolher Conta Escrow da Confia Capital
                    </motion.h2>
                    <motion.p 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        Segurança, transparência e agilidade em transações complexas. Proteja seus negócios com uma solução regulamentada e confiável.
                    </motion.p>

                    <motion.div 
                        className={S.grid}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    >
                        <motion.div 
                            className={S.imageContainer}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                        >
                            <img
                                src={IMAGE.REUNIAO.src}
                                alt="Transações seguras com Conta Escrow"
                                className={S.image}
                            />
                        </motion.div>

                        <motion.div 
                            className={S.steps}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                        >
                            {[
                                {
                                    title: "Proteção total dos fundos até o cumprimento das condições",
                                    description: "Os valores ficam protegidos em conta garantia até que todas as condições acordadas sejam cumpridas, garantindo segurança para todas as partes envolvidas."
                                },
                                {
                                    title: "Processo transparente e regulamentado",
                                    description: "Operações em conformidade com a regulamentação do Banco Central, com transparência total e rastreabilidade de todas as movimentações."
                                },
                                {
                                    title: "Agilidade na liberação quando as condições forem atendidas",
                                    description: "Liberação rápida e automática dos fundos assim que todas as condições forem cumpridas, sem burocracias desnecessárias."
                                },
                                {
                                    title: "Suporte especializado para transações complexas",
                                    description: "Equipe especializada para auxiliar em negociações imobiliárias, fusões, aquisições e outras transações que exigem garantia de fundos."
                                }
                            ].map((step, index) => (
                                <motion.div 
                                    key={index}
                                    className={S.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: 0.6 + (index * 0.1) 
                                    }}
                                    whileHover={{ 
                                        x: 5, 
                                        transition: { duration: 0.3, ease: "easeOut" } 
                                    }}
                                >
                                    <motion.div 
                                        className={S.stepIcon}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeOut", 
                                            delay: 0.7 + (index * 0.1) 
                                        }}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <motion.div 
                                        className={S.stepContent}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut", 
                                            delay: 0.8 + (index * 0.1) 
                                        }}
                                    >
                                        <h3 className={S.stepTitle}>{step.title}</h3>
                                        <p className={S.stepDescription}>
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default EscrowBenefits;

