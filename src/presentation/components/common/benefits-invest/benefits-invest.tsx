"use client";

import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

import {
    IconCreditCard,
    IconBolt,
    IconCards,
    IconChartBar,
    IconFileInvoice,
    IconDeviceMobile,
    IconArrowsLeftRight,
    IconTrendingUp,
    IconCircleCheck,
    IconMoodSmile,
    IconUsers
} from "@tabler/icons-react";

import styles from "./benefits-invest.module.scss";

const BENEFITS = [
    { id: 8, title: "PIX ilimitado", description: "Faça quantos PIX quiser, quando quiser, sem pagar taxas. Transfira dinheiro com total liberdade.", icon: <IconTrendingUp size={34} stroke={1.8} /> },
    { id: 10, title: "Sem mensalidade", description: "Conta 100% gratuita, sem tarifas de manutenção ou surpresas no final do mês.", icon: <IconMoodSmile size={34} stroke={1.8} /> },
    { id: 11, title: "Acesso facilitado", description: "Abra sua conta digital sem burocracia, sem análise de crédito e para todos os perfis.", icon: <IconUsers size={34} stroke={1.8} /> },
    { id: 1, title: "Linha de crédito", description: "Compre parcelado sem ter um cartão.", icon: <IconCreditCard size={34} stroke={1.8} /> },
    { id: 2, title: "Pix", description: "Pague, receba e transfira sem taxas.", icon: <IconBolt size={34} stroke={1.8} /> },
    { id: 7, title: "Transferências gratuitas", description: "Envie e receba dinheiro sem pagar taxas, com liberdade total para movimentar sua conta.", icon: <IconArrowsLeftRight size={34} stroke={1.8} /> },
    { id: 4, title: "Produtos financeiros", description: "Acesse uma variedade de produtos financeiros e serviços para fazer seu dinheiro trabalhar para você.", icon: <IconChartBar size={34} stroke={1.8} /> },
    { id: 3, title: "Cartão de débito", description: "Use o saldo da sua conta onde estiver.", icon: <IconCards size={34} stroke={1.8} /> },
    { id: 6, title: "Tudo no seu celular", description: "Gerencie sua conta de forma simples e rápida, direto pelo app, onde estiver. Controle total na palma da sua mão.", icon: <IconDeviceMobile size={34} stroke={1.8} /> },
    { id: 9, title: "Organização inteligente", description: "Pague contas, acompanhe boletos e receba alertas de vencimento, tudo em um só lugar.", icon: <IconCircleCheck size={34} stroke={1.8} /> },
    { id: 5, title: "Contas e serviços", description: "Pague boletos pelo app e fuja das filas.", icon: <IconFileInvoice size={34} stroke={1.8} /> },
];

const BenefitsInvestSection: React.FC = () => {
    const [viewportRef, emblaApi] = useEmblaCarousel(
        { loop: false, align: "start", dragFree: true },
        [WheelGesturesPlugin()]
    );

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.head}>
                    <h2 className={styles.title}>
                        <span className={styles.titleAccent}>Tudo</span>
                        <span> que você precisa em um só lugar</span>
                    </h2>
                </div>

                <div className={styles.carouselWrapper}>
                    <button
                        type="button"
                        className={`${styles.navButton} ${styles.navLeft}`}
                        onClick={() => emblaApi && emblaApi.scrollPrev()}
                        aria-label="Ver anterior"
                    >
                        ‹
                    </button>

                    <div className={styles.carouselViewport} ref={viewportRef}>
                        <div className={styles.carouselTrack}>
                            {BENEFITS.map((item) => (
                                <article key={item.id} className={styles.card}>
                                    <div className={styles.icon}>
                                        {item.icon}
                                    </div>

                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardText}>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        className={`${styles.navButton} ${styles.navRight}`}
                        onClick={() => emblaApi && emblaApi.scrollNext()}
                        aria-label="Ver próximo"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BenefitsInvestSection;
