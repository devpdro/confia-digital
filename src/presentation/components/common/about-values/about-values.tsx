import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import S from './about-values.module.scss';
import { IMAGE } from 'src/presentation/assets';

interface AboutValuesProps {
    className?: string;
}

const AboutValues: React.FC<AboutValuesProps> = ({ className }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const values = [
        {
            id: 1,
            title: "Lidere com integridade.",
            description: "Construímos relacionamentos sólidos baseados na confiança mútua. Nossa integridade é o alicerce de todas as decisões que tomamos, garantindo transparência total em cada operação e mantendo sempre a palavra dada aos nossos parceiros e clientes.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l11 11z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Inovação Constante.",
            description: "Estamos sempre na vanguarda da tecnologia financeira, desenvolvendo soluções inovadoras que revolucionam o mercado de securitização. Nossa equipe busca continuamente novas formas de otimizar processos e criar valor para nossos clientes através da inovação.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-1c0-.552-.448-1-1-1H4c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2h1a2 2 0 0 0 2-2v-3c0-.552-.448-1-1-1z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Transparência Total.",
            description: "Acreditamos que a transparência é fundamental para construir confiança duradoura. Compartilhamos informações de forma clara e acessível, mantendo nossos clientes sempre informados sobre cada etapa dos processos e garantindo total visibilidade em nossas operações.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Crescimento Sustentável.",
            description: "Nosso foco está no crescimento consistente e sustentável, tanto para nossa empresa quanto para nossos clientes. Desenvolvemos estratégias de longo prazo que geram valor duradouro, sempre considerando o impacto positivo em toda a cadeia de relacionamentos.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
            )
        }
    ];

    const topIcons = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l11 11z" />
                </svg>
            ),
            alt: "Integridade"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 0 0-2-2h-1c0-.552-.448-1-1-1H4c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2h1a2 2 0 0 0 2-2v-3c0-.552-.448-1-1-1z" />
                </svg>
            ),
            alt: "Inovação"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
            alt: "Transparência"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
            ),
            alt: "Crescimento"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % values.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + values.length) % values.length);
    };

    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <motion.div 
                    className={S.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h2 
                        className={S.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Nossos valores.
                    </motion.h2>
                    <motion.p 
                        className={S.description}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        Nossos valores estão no centro de tudo o que fazemos e nos mantêm focados em causar um impacto positivo para nossos clientes, membros da equipe e comunidade.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className={S.topIcons}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    {topIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${S.topIcon} ${index === currentSlide ? S.active : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.5, 
                                ease: "easeOut", 
                                delay: 0.4 + (index * 0.1) 
                            }}
                            whileHover={{ 
                                scale: 1.1, 
                                transition: { duration: 0.2, ease: "easeOut" } 
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className={S.sliderContainer}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                >
                    <div className={S.valueCard}>
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentSlide}
                                className={S.cardContent}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <h3 className={S.cardTitle}>{values[currentSlide].title}</h3>
                                <p className={S.cardDescription}>{values[currentSlide].description}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div 
                        className={S.navigation}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    >
                        <motion.button 
                            className={S.navButton} 
                            onClick={prevSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
                            </svg>
                        </motion.button>

                        <div className={S.indicators}>
                            {values.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`${S.indicator} ${index === currentSlide ? S.active : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                />
                            ))}
                        </div>

                        <motion.button 
                            className={S.navButton} 
                            onClick={nextSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="currentColor" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutValues;