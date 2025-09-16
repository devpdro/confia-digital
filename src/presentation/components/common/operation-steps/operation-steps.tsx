import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';

import S from './operation-steps.module.scss';

const OperationSteps = () => {
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
                        Como estruturamos sua operação de securitização
                    </motion.h2>
                    <motion.p 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        Processo institucional que converte recebíveis em liquidez através de cessão fiduciária registrada.
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
                                src={IMAGE.HOMEM_COMPUTADOR.src}
                                alt="Mulher trabalhando no computador"
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
                                    <h3 className={S.stepTitle}>Análise de Recebíveis</h3>
                                    <p className={S.stepDescription}>
                                        Due diligence completa: rating dos sacados, histórico de pagamento e dispersão da carteira. Análise de risco em até 48h.
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
                                    <h3 className={S.stepTitle}>Estruturação Jurídica</h3>
                                    <p className={S.stepDescription}>
                                        Cessão fiduciária registrada, conta centralizadora e documentação CVM. Estrutura sob medida para seu perfil de crédito.
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
                                    <h3 className={S.stepTitle}>Liquidação e Repasse</h3>
                                    <p className={S.stepDescription}>
                                        Recursos liberados em D+1 após assinatura. Acompanhamento da cobrança através da nossa plataforma HotSys.
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

export default OperationSteps;