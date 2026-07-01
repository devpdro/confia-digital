"use client";

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';

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
        isWhiteText: false
    }
];

const Header = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const infiniteSlides = [...slides, ...slides, ...slides];
    const startIndex = slides.length;

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        duration: 20,
        align: 'center',
        slidesToScroll: 1,
        containScroll: 'trimSnaps',
        startIndex
    });

    const scrollPrev = useCallback(() => {
        if (!emblaApi || isTransitioning) return;
        const currentIndex = emblaApi.selectedScrollSnap();

        if (currentIndex === 0) {
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

    useEffect(() => {
        if (!emblaApi) return;

        const handleSettle = () => {
            if (isTransitioning) return;
            const index = emblaApi.selectedScrollSnap();

            if (index < slides.length) {
                const targetIndex = index + slides.length;
                setIsTransitioning(true);
                emblaApi.scrollTo(targetIndex, true);
                setTimeout(() => setIsTransitioning(false), 50);
            } else if (index >= slides.length * 2) {
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
                                    backgroundImage: `url(${slide.backgroundImage.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '24px',
                                    position: 'relative'
                                }}
                            >
                                <div className={S.slideOverlay}></div>
                                <div className={S.slideContent}>
                                    <div className={`${S.slideText} ${slide.isWhiteText ? S.slideTextWhite : ''}`}>
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
                                                className={S.ctaButton}
                                            >
                                                <Button
                                                    typeStyle="btn1"
                                                    label={slide.buttonText}
                                                    size="md"
                                                    width="240px"
                                                />
                                            </a>
                                        ) : (
                                            <Link href={slide.buttonLink} className={S.ctaButton}>
                                                <Button
                                                    typeStyle="btn1"
                                                    label={slide.buttonText}
                                                    size="md"
                                                    width="240px"
                                                />
                                            </Link>
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
