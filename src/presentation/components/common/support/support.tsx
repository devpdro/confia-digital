import Link from 'next/link';
import { motion } from 'framer-motion';

import { IMAGE } from 'src/presentation/assets';

import S from './support.module.scss';

const Support = () => {
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
                        className={S.textContent}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <motion.h2 
                            className={S.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            Acompanhamento dedicado durante toda operação.
                        </motion.h2>

                        <motion.div 
                            className={S.description}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <p className={S.paragraph}>
                                Time especializado em securitização para orientar sua empresa em cada etapa: da estruturação inicial até o acompanhamento da cobrança dos recebíveis.
                            </p>

                            <p className={S.paragraph}>
                                Acesse relatórios de performance em tempo real através da nossa plataforma{' '}
                                <a href="https://hotsys.com.br/#/login" target="_blank" rel="noopener noreferrer" className={S.link}>HotSys</a> ou consulte nosso{' '}
                                <Link href="/perguntas-frequentes" className={S.link}>Painel de dúvidas</Link>.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className={S.imageContainer}
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className={S.imageWrapper}>
                            <img
                                src={IMAGE.SUPORTE.src}
                                alt="Atendente sorrindo com headset"
                                className={S.image}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Support;