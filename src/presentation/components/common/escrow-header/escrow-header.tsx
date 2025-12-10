import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import Link from 'next/link';

import { motion } from 'framer-motion';

import S from './escrow-header.module.scss';

const EscrowHeader = () => {
    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <motion.div
                    className={S.grid}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className={S.visual}
                        initial={{ opacity: 0, scale: 0.98, x: -30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <img className={S.img} src={IMAGE.PROTECAO.src} alt="Conta Escrow - Segurança em transações" />
                    </motion.div>

                    <div className={S.text}>
                        <motion.h1
                            className={S.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                            Conta Escrow: segurança em suas transações
                        </motion.h1>

                        <motion.p
                            className={S.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Proteja negociações complexas com uma conta de garantia. Os fundos ficam seguros até o cumprimento de todas as condições acordadas, garantindo transparência e confiança para todas as partes.
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
                                    label="Solicitar Conta Escrow"
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
                                Conta Escrow regulamentada pelo Banco Central do Brasil. Fundos protegidos até o cumprimento de todas as condições acordadas. Consulte taxas e condições.
                            </p>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default EscrowHeader;

