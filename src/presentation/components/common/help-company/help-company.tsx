import { IMAGE } from 'src/presentation/assets';
import { Button } from 'src/presentation/components';
import { motion } from 'framer-motion';
import Link from 'next/link';

import S from './help-company.module.scss';

const SOLUTIONS_DATA = [
    {
        image: IMAGE.MONEY_VOLTA,
        alt: "Ícone de securitização de recebíveis",
        title: "Securitização de Recebíveis",
        description: "Transforme seus recebíveis em títulos negociáveis no mercado de capitais com estruturas CRI e CRA personalizadas.",
        link: "/securitizacao-de-recebiveis"
    },
    {
        image: IMAGE.PAPEL,
        alt: "Ícone de antecipação de contratos",
        title: "Antecipação de Contratos",
        description: "Acelere seu fluxo de caixa antecipando contratos futuros com taxas competitivas e processo ágil.",
        link: "/antecipacao-de-contratos"
    },
    {
        image: IMAGE.PROTECAO,
        alt: "Ícone de estruturação customizada",
        title: "Estruturação Customizada",
        description: "Soluções financeiras sob medida para necessidades específicas do seu negócio e setor de atuação.",
        link: "/estruturacao-customizada"
    }
];

const HelpCompany = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div 
                        className={S.header}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <motion.h2 
                            className={S.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Nossas principais soluções financeiras.
                        </motion.h2>
                        <motion.p 
                            className={S.subtitle}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            Descubra como transformar seus recebíveis em capital de giro com nossas soluções especializadas,
                            desenvolvidas para acelerar o crescimento do seu negócio.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className={S.cards}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    >
                        {SOLUTIONS_DATA.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className={S.card}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    ease: "easeOut", 
                                    delay: 0.5 + (index * 0.1) 
                                }}
                                whileHover={{ 
                                    y: -8, 
                                    transition: { duration: 0.3, ease: "easeOut" } 
                                }}
                            >
                                <motion.div 
                                    className={S.iconWrapper}
                                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.5, 
                                        ease: "easeOut", 
                                        delay: 0.6 + (index * 0.1) 
                                    }}
                                >
                                    <img src={item.image.src} alt={item.alt} />
                                </motion.div>
                                <motion.h3 
                                    className={S.cardTitle}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: 0.7 + (index * 0.1) 
                                    }}
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p 
                                    className={S.cardDescription}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: 0.8 + (index * 0.1) 
                                    }}
                                >
                                    {item.description}
                                </motion.p>
                                <motion.div 
                                    className={S.cardButton}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.5, 
                                        ease: "easeOut", 
                                        delay: 0.9 + (index * 0.1) 
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Link href={item.link}>
                                        <Button
                                            typeStyle="btn3"
                                            label="Saiba mais"
                                            size="sm"
                                            width="180px"
                                        />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HelpCompany;