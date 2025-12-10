import { Button } from 'src/presentation/components';
import { StackedImageHover } from 'src/components/ui/hover-deck-fx';
import Link from 'next/link';

import { motion } from 'framer-motion';

import S from './capital-giro-header.module.scss';

const CapitalGiroHeader = () => {
    const money = "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg";

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
                            Nunca mais perca oportunidades por falta de capital de giro
                        </motion.h1>

                        <motion.p
                            className={S.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Seja para aproveitar uma oportunidade de compra, cobrir um gap de fluxo de caixa ou investir no crescimento da empresa - tenha acesso rápido ao capital que seu negócio precisa, com condições transparentes e aprovação ágil.
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
                                    label="Simular capital de giro"
                                    size="md"
                                    width="280px"
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
                                Banco Digital regulamentado pelo Banco Central do Brasil. Crédito sujeito a análise. Consulte taxas e condições.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        className={S.visual}
                        initial={{ opacity: 0, scale: 0.98, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className={S.moneyStack}>
                            <StackedImageHover
                                images={[money, money, money, money]}
                                width={640}
                                height={260}
                                backgroundColor="transparent"
                                ariaLabel="Notas de dinheiro empilhadas"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CapitalGiroHeader;

