import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';

import { motion } from 'framer-motion';

import S from './investments-header.module.scss';

const InvestmentsHeader = () => {
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
                            Seu banco completo na palma da mão
                        </motion.h1>

                        <motion.p
                            className={S.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Zero tarifas, cartão sem anuidade, PIX ilimitado e transferências gratuitas. Gerencie suas finanças com praticidade e segurança, tudo no seu celular.
                        </motion.p>

                        <motion.div
                            className={S.button}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <a
                                href="https://conta.confiacapital.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    typeStyle="btn1"
                                    label="Acessar minha conta"
                                    size="md"
                                    width="240px"
                                />
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        className={S.visual}
                        initial={{ opacity: 0, scale: 0.98, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <img className={S.img} src={IMAGE.HEADER_IMAGE.src} alt="Aplicativo Conta Digital - Banco digital no seu celular" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default InvestmentsHeader;
