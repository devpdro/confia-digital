import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';
import Link from 'next/link';

import S from './custom-header.module.scss';

const CustomHeader = () => {
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
                        <motion.span 
                            className={S.subtitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            Estruturação sob medida
                        </motion.span>
                        
                        <motion.h1 
                            className={S.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Operações sob medida que transformam seu negócio.
                        </motion.h1>
                        
                        <motion.p 
                            className={S.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        >
                            Operações customizadas a partir de R$ 5 milhões. CRI e CRA sob medida com condições negociadas e garantias especiais para maximizar seus resultados.
                        </motion.p>
                        
                        <motion.div 
                            className={S.button}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href="/solicitar-proposta">
                                <Button
                                    typeStyle="btn1"
                                    label="Solicitar proposta"
                                    size="md"
                                    width="260px"
                                />
                            </Link>
                        </motion.div>
                        
                        <motion.div 
                            className={S.trust}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
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
                                Mais de R$ 150 milhões estruturados. Operações personalizadas com as melhores condições de mercado. Expertise comprovada em CRI e CRA.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div 
                        className={S.visual}
                        initial={{ opacity: 0, scale: 0.98, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <img className={S.img} src={IMAGE.REUNIAO.src} alt="Estruturação customizada de operações" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CustomHeader;