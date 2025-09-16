import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';
import Link from 'next/link';

import S from './business-card-promo.module.scss';

const BusinessCardPromo = () => {
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
                        className={S.iconWrapper}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    >
                        <img src={IMAGE.PLANTA_DINHEIRO.src} alt="Ícone de planta crescendo com dinheiro representando crescimento financeiro" />
                    </motion.div>

                    <motion.div 
                        className={S.textContent}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <h2 className={S.title}>
                            Transforme seus recebíveis em capital imediato.
                            Securitização sem comprometer o balanço.
                        </h2>

                        <div className={S.description}>
                            <p>
                                Operações de <strong>securitização de recebíveis</strong> a partir de R$ 500 mil.
                                Duplicatas e contratos confirmados viram liquidez em até 48h
                                através de cessão fiduciária registrada.
                            </p>
                        </div>

                        <motion.div 
                            className={S.cta}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href="/solicitar-proposta">
                                <Button
                                    typeStyle="btn1"
                                    label="Solicitar proposta"
                                    size="md"
                                    width="280px"
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BusinessCardPromo;