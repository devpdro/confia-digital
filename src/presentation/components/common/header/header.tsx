import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import Link from 'next/link';
import { motion } from 'framer-motion';

import S from './header.module.scss';

const Header = () => {

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
                            {/* Confia em operações seguras e confiáveis */}
                            Transforme recebíveis em capital imediato
                        </motion.h1>
                        
                        <motion.p 
                            className={S.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Contratos confirmados em liquidez imediata. Estruturamos operações que destravam crescimento sem comprometer o balanço.
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
                            <motion.div 
                                 className={S.rating}
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                             >
                                <img src={IMAGE.SELO_SECURITIZADORA.src} alt="CVM - Comissão de Valores Mobiliários" />
                                <img src={IMAGE.SELO_SECURITIZADORA.src} alt="Registro Securitizadora" />
                            </motion.div>
                            <p className={S.disclaimer}>
                                Securitizadora autorizada pela <span className={S.link}>CVM</span>. Todas as operações são estruturadas conforme regulamentação do Banco Central e sujeitas à análise de crédito.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div 
                        className={S.visual}
                        initial={{ opacity: 0, scale: 0.98, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <img className={S.img} src={IMAGE.DINHEIRO.src} alt="Transformação de recebíveis em capital imediato" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Header;
