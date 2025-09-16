import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import Link from 'next/link';
import { motion } from 'framer-motion';

import S from './products.module.scss';

const Products = () => {
    return (
        <section className={S.productsSection}>
            <div className={S.wrapper}>
                <motion.div 
                    className={S.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className={S.mainTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Tudo o que você precisa para transformar recebíveis em capital.
                    </motion.h2>
                    <motion.p 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Securitização, antecipação e estruturação de operações totalmente integradas a partir de uma plataforma especializada.
                    </motion.p>
                </motion.div>

                <div className={S.productsContainer}>
                    {/* Primeiro Card - Securitização de Recebíveis */}
                    <motion.div 
                        className={S.productCard}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                    >
                        <motion.div 
                            className={S.imageArea}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <img
                                src={IMAGE.GRAFICO_MONEY.src}
                                alt="Dashboard de securitização de recebíveis"
                                className={S.productImage}
                            />
                        </motion.div>

                        <motion.div 
                            className={S.contentArea}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                        >
                            <h3 className={S.productTitle}>
                                Securitização de recebíveis que transforma contratos em liquidez.
                            </h3>

                            <p className={S.productDescription}>
                                Estruture operações a partir de R$ 500 mil com taxa baseada no risco real dos seus pagadores e liberação expressa em até 48h.
                            </p>

                            <div className={S.benefitsList}>
                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Operações a partir de R$ 500 mil com taxa competitiva</h4>
                                    </div>
                                </div>

                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                                            <path d="m9 12 2 2 4-4"></path>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Não afeta o balanço patrimonial da empresa</h4>
                                    </div>
                                </div>

                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                            <path d="M21 3v5h-5"></path>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Liberação em D+1 a D+3 após aprovação</h4>
                                    </div>
                                </div>
                            </div>

                            <Link href="/securitizacao-de-recebiveis">
                                <Button
                                    typeStyle="btn1"
                                    label="Explore a securitização de recebíveis"
                                    size="sm"
                                    width={{ base: "330px", xs: "100%" }}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Segundo Card - Antecipação de Contratos */}
                    <motion.div 
                        className={S.productCard}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                    >
                        <motion.div 
                            className={S.imageArea}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            <img
                                src={IMAGE.CONTRATO_DINHEIRO.src}
                                alt="Antecipação de contratos futuros"
                                className={S.productImage}
                            />
                        </motion.div>

                        <motion.div 
                            className={S.contentArea}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                        >
                            <h3 className={S.productTitle}>
                                Antecipação de contratos para capital de giro imediato.
                            </h3>

                            <p className={S.productDescription}>
                                Transforme contratos de prestação de serviços, mensalidades e faturamento recorrente em capital disponível hoje.
                            </p>

                            <div className={S.benefitsList}>
                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12,6 12,12 16,14"></polyline>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Análise e aprovação em até 24 horas</h4>
                                    </div>
                                </div>

                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m9 12 2 2 4-4"></path>
                                            <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"></path>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Ideal para contratos recorrentes e mensalidades</h4>
                                    </div>
                                </div>

                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Estrutura flexível para diferentes setores</h4>
                                    </div>
                                </div>
                            </div>

                            <Link href="/antecipacao-de-contratos">
                                <Button
                                    typeStyle="btn1"
                                    label="Explore a antecipação de contratos"
                                    size="sm"
                                    width={{ base: "330px", xs: "100%" }}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Terceiro Card - Estruturação Customizada */}
                    <motion.div 
                        className={S.productCard}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        whileHover={{ y: -5, transition: { duration: 0.3, ease: "easeOut" } }}
                    >
                        <motion.div 
                            className={S.imageArea}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        >
                            <img
                                src={IMAGE.ESTRUTURACAO_CUSTOMIZADA.src}
                                alt="Estruturação de operações complexas"
                                className={S.productImage}
                            />
                        </motion.div>

                        <motion.div 
                            className={S.contentArea}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                        >
                            <h3 className={S.productTitle}>
                                Estruturação sob medida para operações complexas.
                            </h3>

                            <p className={S.productDescription}>
                                Para grandes volumes e necessidades específicas, desenvolvemos estruturas personalizadas com foco em compliance e otimização fiscal.
                            </p>

                            <div className={S.benefitsList}>
                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                            <polyline points="14,2 14,8 20,8"></polyline>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Due diligence completa e assessoria jurídica</h4>
                                    </div>
                                </div>

                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="m22 21-3-3 3-3"></path>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Acompanhamento dedicado durante toda operação</h4>
                                    </div>
                                </div>

                                <div className={S.benefit}>
                                    <div className={S.benefitIcon}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                            <polyline points="7.5,4.21 12,6.81 16.5,4.21"></polyline>
                                        </svg>
                                    </div>
                                    <div className={S.benefitText}>
                                        <h4 className={S.benefitTitle}>Soluções para grandes volumes e casos especiais</h4>
                                    </div>
                                </div>
                            </div>

                            <Link href="/estruturacao-customizada">
                                <Button
                                    typeStyle="btn1"
                                    label="Explore a estruturação customizada"
                                    size="sm"
                                    width={{ base: "330px", xs: "100%" }}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Products;