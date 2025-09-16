import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';

import S from './contract-process.module.scss';

const ContractProcess = () => {
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
                        Como funciona a antecipação de contratos na prática.
                    </motion.h2>
                    <motion.p 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        Processo simples e rápido que transforma seus contratos em dinheiro no mesmo dia.
                    </motion.p>

                    <div className={S.grid}>
                        <motion.div 
                            className={S.steps}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        >
                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            >
                                <motion.div 
                                    className={S.stepNumber}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                                >
                                    1
                                </motion.div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Envio da Documentação</h3>
                                    <p className={S.stepDescription}>
                                        Envie seu contrato assinado e documentos da empresa. Nossa equipe analisa em até 6 horas úteis.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            >
                                <motion.div 
                                    className={S.stepNumber}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                                >
                                    2
                                </motion.div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Análise e Aprovação</h3>
                                    <p className={S.stepDescription}>
                                        Avaliamos a qualidade do pagador e calculamos o valor da antecipação entre 70% e 90% do contrato.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            >
                                <motion.div 
                                    className={S.stepNumber}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                                >
                                    3
                                </motion.div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Recebimento Imediato</h3>
                                    <p className={S.stepDescription}>
                                        Após aprovação, o dinheiro é liberado via PIX ou TED no mesmo dia ou próximo dia útil.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className={S.imageContainer}
                            initial={{ opacity: 0, x: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        >
                            <img
                                src={IMAGE.IDEIAS.src}
                                alt="Processo de análise e aprovação de contratos"
                                className={S.image}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContractProcess;