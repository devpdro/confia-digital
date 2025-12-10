import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';

import S from './capital-giro-steps.module.scss';

const CapitalGiroSteps = () => {
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
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        Como funciona o capital de giro
                    </motion.h2>
                    <motion.p 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        Processo rápido e 100% digital para você ter acesso ao capital que seu negócio precisa, sem burocracia.
                    </motion.p>

                    <div className={S.grid}>
                        <motion.div 
                            className={S.imageContainer}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        >
                            <img
                                src={IMAGE.CONTRATO_DINHEIRO.src}
                                alt="Capital de giro para seu negócio"
                                className={S.image}
                            />
                        </motion.div>

                        <div className={S.steps}>
                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            >
                                <div className={S.stepNumber}>1</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Solicitação Online</h3>
                                    <p className={S.stepDescription}>
                                        Preencha o formulário em poucos minutos. Envie os documentos necessários de forma 100% digital, sem sair de casa.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            >
                                <div className={S.stepNumber}>2</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Análise e Aprovação</h3>
                                    <p className={S.stepDescription}>
                                        Nossa equipe analisa seu perfil e capacidade de pagamento. Aprovação em até 24 horas, com condições transparentes desde o início.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            >
                                <div className={S.stepNumber}>3</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Liberação do Capital</h3>
                                    <p className={S.stepDescription}>
                                        Dinheiro na sua conta em até 24h após aprovação. Use para cobrir despesas, investir ou aproveitar oportunidades de mercado.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CapitalGiroSteps;

