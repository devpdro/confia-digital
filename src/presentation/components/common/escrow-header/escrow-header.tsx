import { Button } from 'src/presentation/components';
import StackedImageHover from '../stacked-image-hover/stacked-image-hover';

import { motion } from 'framer-motion';

import S from './escrow-header.module.scss';

const EscrowHeader = () => {
    const moneyImage = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg";

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
                                href="https://hotinvest.dbs.moneyp.com.br/login"
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

                        <motion.div
                            className={S.trust}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        >
                            <p className={S.disclaimer}>
                                Banco Digital regulamentado pelo Banco Central do Brasil. Operações protegidas por criptografia e garantia do FGC para depósitos de até R$ 250 mil.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className={S.visual}
                        initial={{ opacity: 0, scale: 0.98, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <StackedImageHover
                            images={[moneyImage, moneyImage, moneyImage, moneyImage]}
                            width={640}
                            height={400}
                            backgroundColor="transparent"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default EscrowHeader;

