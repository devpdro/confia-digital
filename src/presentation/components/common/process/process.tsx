import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';
import S from './process.module.scss';

const Process = () => {
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
                        Como funciona nossa securitização na prática.
                    </motion.h2>
                    <motion.p 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        Processo estruturado que transforma seus recebíveis em capital de giro sem burocracia.²
                    </motion.p>

                    <div className={S.grid}>
                        <motion.div 
                            className={S.imageContainer}
                            initial={{ opacity: 0, x: -30 }}
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
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            >
                                <div className={S.stepNumber}>1</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Mapeamento dos Recebíveis</h3>
                                    <p className={S.stepDescription}>
                                        Analisamos seu portfólio de recebíveis para identificar as melhores oportunidades de securitização.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            >
                                <div className={S.stepNumber}>2</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Estruturação da Operação</h3>
                                    <p className={S.stepDescription}>
                                        Criamos a estrutura jurídica e financeira ideal para maximizar o valor dos seus ativos.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            >
                                <div className={S.stepNumber}>3</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Emissão e Distribuição</h3>
                                    <p className={S.stepDescription}>
                                        Realizamos a emissão dos títulos e distribuição para investidores qualificados.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                className={S.step}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                            >
                                <div className={S.stepNumber}>4</div>
                                <div className={S.stepContent}>
                                    <h3 className={S.stepTitle}>Liberação dos Recursos</h3>
                                    <p className={S.stepDescription}>
                                        Você recebe o capital de giro imediatamente para impulsionar seu negócio.
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

export default Process;