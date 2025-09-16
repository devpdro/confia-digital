import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import S from './securitization-stats.module.scss';

// Componente para animação de contagem
const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2.5 }: {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
                
                // Easing function (easeOut)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(easeOut * value));
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
};

const HeroStats = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div 
                        className={S.statistic}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <motion.h2 
                            className={S.number}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            R$ <AnimatedCounter value={2} suffix=" bilhões" duration={3} />
                        </motion.h2>
                        <motion.p 
                            className={S.description}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            em recebíveis securitizados¹
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className={S.text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    >
                        <p className={S.subtitle}>
                            Mais de <AnimatedCounter value={280} duration={2.8} /> operações de securitização estruturadas para empresas
                            de todos os setores. Transformamos duplicatas, contratos e recebíveis
                            confirmados em capital disponível através de cessão fiduciária registrada.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroStats;