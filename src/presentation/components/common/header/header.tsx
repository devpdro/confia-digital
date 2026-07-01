"use client";

import { useState, useEffect, useCallback } from 'react';
import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { IconDroplet, IconCoin, IconCircleCheck } from '@tabler/icons-react';

import S from './header.module.scss';

const slides = [
    {
        id: 2,
        badge: "ANTECIPAÇÃO DE RECEBÍVEIS",
        title: "Liquidez em até 48h sem comprometer seu balanço",
        description: "Antecipe duplicatas e contratos com as melhores taxas do mercado",
        buttonText: "Solicitar proposta",
        buttonLink: "/solicitar-proposta",
        backgroundImage: IMAGE.HEADER_IMAGE,
        highlight1: { text: "Sem análise", subtext: "de crédito", icon: IconCircleCheck },
        highlight2: { text: "Taxas", subtext: "competitivas", icon: IconCoin },
        isWhiteText: true
    },
    {
        id: 1,
        badge: "BANCO DIGITAL DA CONFIA",
        title: "Descubra a conta que mais rende do Brasil",
        description: "Transforme seus recebíveis em capital imediato com segurança e agilidade",
        buttonText: "Abrir conta grátis",
        buttonLink: "https://api.whatsapp.com/send?phone=5519981062535&text=Ol%C3%A1!%20Gostaria%20de%20abrir%20uma%20conta%20na%20Confia%20Digital!",
        backgroundImage: IMAGE.HEADER_IMAGE_MAO,
        highlight1: { text: "Até 105%", subtext: "do CDI na Conta", icon: IconDroplet },
        highlight2: { text: "Até 120%", subtext: "do CDI nos Cofrinhos", icon: IconCoin }
    }
];

const Header = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Criar array com slides duplicados para loop infinito suave
    const infiniteSlides = [...slides, ...slides, ...slides];
    const startIndex = slides.length; // Começar no meio (primeiro conjunto de slides)
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: false, 
        duration: 20,
        align: 'center',
        slidesToScroll: 1,
        containScroll: 'trimSnaps',
        startIndex: startIndex
    });

    const scrollPrev = useCallback(() => {
        if (!emblaApi || isTransitioning) return;
        const currentIndex = emblaApi.selectedScrollSnap();
        
        if (currentIndex === 0) {
            // Se está no primeiro clone, vai para o último slide real sem animação
            setIsTransitioning(true);
            emblaApi.scrollTo(slides.length * 2 - 1, true);
            setTimeout(() => setIsTransitioning(false), 50);
        } else {
            emblaApi.scrollPrev();
        }
    }, [emblaApi, isTransitioning]);

    const scrollNext = useCallback(() => {
        if (!emblaApi || isTransitioning) return;
        const currentIndex = emblaApi.selectedScrollSnap();
        
        if (currentIndex >= slides.length * 2) {
            // Se está no último clone, vai para o primeiro slide real sem animação
            setIsTransitioning(true);
            emblaApi.scrollTo(slides.length, true);
            setTimeout(() => setIsTransitioning(false), 50);
        } else {
            emblaApi.scrollNext();
        }
    }, [emblaApi, isTransitioning]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap();
        const realIndex = index % slides.length;
        setSelectedIndex(realIndex);
    }, [emblaApi]);

    // Reposicionamento silencioso após a transição terminar
    useEffect(() => {
        if (!emblaApi) return;
        
        const handleSettle = () => {
            if (isTransitioning) return;
            const index = emblaApi.selectedScrollSnap();
            
            // Se está no clone inicial, reposiciona para o slide real correspondente
            if (index < slides.length) {
                const targetIndex = index + slides.length;
                setIsTransitioning(true);
                emblaApi.scrollTo(targetIndex, true);
                setTimeout(() => setIsTransitioning(false), 50);
            } 
            // Se está no clone final, reposiciona para o slide real correspondente
            else if (index >= slides.length * 2) {
                const targetIndex = index - slides.length;
                setIsTransitioning(true);
                emblaApi.scrollTo(targetIndex, true);
                setTimeout(() => setIsTransitioning(false), 50);
            }
        };

        emblaApi.on('settle', handleSettle);
        return () => {
            emblaApi.off('settle', handleSettle);
        };
    }, [emblaApi, isTransitioning]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    // Auto-play
    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            if (isTransitioning) return;
            scrollNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [emblaApi, isTransitioning, scrollNext]);

    return (
        <section className={S.header}>
            <div className={S.carouselContainer}>
                <div className={S.carouselViewport} ref={emblaRef}>
                    <div className={S.carouselContainerInner}>
                        {infiniteSlides.map((slide, index) => (
                            <div 
                                key={`${slide.id}-${index}`} 
                                className={S.slide}
                                style={{ 
                                    ...(slide.backgroundColor ? {
                                        backgroundColor: slide.backgroundColor
                                    } : {
                                        backgroundImage: `url(${slide.backgroundImage?.src})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }),
                                    borderRadius: '24px',
                                    position: 'relative'
                                }}
                            >
                                {!slide.backgroundColor && <div className={S.slideOverlay}></div>}
                                <div className={S.slideContent}>
                                    <div className={`${S.slideText} ${slide.isWhiteText ? S.slideTextWhite : ''} ${slide.backgroundColor ? S.slideTextWhite : ''}`}>
                                        <span className={S.badge}>{slide.badge}</span>
                                        <motion.h1
                                            className={S.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {slide.title}
                                        </motion.h1>
                                        {slide.buttonLink.startsWith('http') ? (
                                            <a 
                                                href={slide.buttonLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={`${S.ctaButton} ${slide.buttonStyle === 'white' ? S.ctaButtonWhite : ''}`}
                                            >
                                                <Button
                                                    typeStyle="btn1"
                                                    label={slide.buttonText}
                                                    size="md"
                                                    width="240px"
                                                    accentColor={slide.buttonStyle === 'white' ? '#ffffff' : undefined}
                                                />
                                            </a>
                                        ) : (
                                            <Link href={slide.buttonLink} className={`${S.ctaButton} ${slide.buttonStyle === 'white' ? S.ctaButtonWhite : ''}`}>
                                                <Button
                                                    typeStyle="btn1"
                                                    label={slide.buttonText}
                                                    size="md"
                                                    width="240px"
                                                    accentColor={slide.buttonStyle === 'white' ? '#ffffff' : undefined}
                                                />
                                            </Link>
                                        )}
                                        {slide.backgroundColor && (
                                            <div className={S.highlights}>
                                                <div className={S.highlightBox}>
                                                    {(() => {
                                                        const IconComponent = slide.highlight1.icon;
                                                        return <IconComponent className={S.highlightIcon} size={20} stroke={1.5} />;
                                                    })()}
                                                    <div>
                                                        <div className={S.highlightText}>{slide.highlight1.text}</div>
                                                        <div className={S.highlightSubtext}>{slide.highlight1.subtext}</div>
                                                    </div>
                                                </div>
                                                <div className={S.highlightBox}>
                                                    {(() => {
                                                        const IconComponent = slide.highlight2.icon;
                                                        return <IconComponent className={S.highlightIcon} size={20} stroke={1.5} />;
                                                    })()}
                                                    <div>
                                                        <div className={S.highlightText}>{slide.highlight2.text}</div>
                                                        <div className={S.highlightSubtext}>{slide.highlight2.subtext}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className={S.navButton} onClick={scrollPrev} aria-label="Slide anterior">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
                    </svg>
                </button>
                <button className={`${S.navButton} ${S.navButtonRight}`} onClick={scrollNext} aria-label="Próximo slide">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
                    </svg>
                </button>

                <div className={S.dots}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`${S.dot} ${index === selectedIndex ? S.dotActive : ''}`}
                            onClick={() => emblaApi?.scrollTo(index)}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Header;
