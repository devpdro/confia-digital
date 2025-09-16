import React, { useState } from 'react';
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
                <div className={S.header}>
                    <h2 className={S.title}>Nossos valores.</h2>
                    <p className={S.description}>
                        Nossos valores estão no centro de tudo o que fazemos e nos mantêm focados em causar um impacto positivo para nossos clientes, membros da equipe e comunidade.
                    </p>
                </div>

                <div className={S.topIcons}>
                    {topIcons.map((item, index) => (
                        <div
                            key={index}
                            className={`${S.topIcon} ${index === currentSlide ? S.active : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>

                <div className={S.sliderContainer}>
                    <div className={S.valueCard}>
                        <div className={S.cardContent}>
                            <h3 className={S.cardTitle}>{values[currentSlide].title}</h3>
                            <p className={S.cardDescription}>{values[currentSlide].description}</p>
                        </div>
                    </div>

                    <div className={S.navigation}>
                        <button className={S.navButton} onClick={prevSlide}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
                            </svg>
                        </button>

                        <div className={S.indicators}>
                            {values.map((_, index) => (
                                <div
                                    key={index}
                                    className={`${S.indicator} ${index === currentSlide ? S.active : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>

                        <button className={S.navButton} onClick={nextSlide}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutValues;