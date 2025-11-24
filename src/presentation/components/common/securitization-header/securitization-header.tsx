import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';
import Link from 'next/link';

import S from './securitization-header.module.scss';

const SecuritizationHeader = () => {
    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <motion.div
                    className={S.grid}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className={S.text}>
                        <motion.h1
                            className={S.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                            Antecipação de recebíveis que converte contratos em liquidez
                        </motion.h1>

                        <motion.p
                            className={S.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Estruturamos operações de antecipação que transformam suas duplicatas, contratos e recebíveis confirmados em capital disponível em até 48h.
                        </motion.p>

                        <motion.div
                            className={S.button}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href="/solicitar-proposta">
                                <Button
                                    typeStyle="btn1"
                                    label="Solicitar proposta"
                                    size="md"
                                    width="240px"
                                />
                            </Link>
                        </motion.div>

                        <motion.div
                            className={S.trust}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        >
                            <p className={S.disclaimer}>
                                Relatórios mensais de performance. Acompanhamento em tempo real através de nossa plataforma proprietária <a href="https://hotsys.com.br/#/login" target="_blank" rel="noopener noreferrer" className={S.link}>HotSys</a>.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className={S.visual}
                        initial={{ opacity: 0, scale: 0.98, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <img className={S.img} src={IMAGE.EMPRESARIO.src} alt="" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SecuritizationHeader;
