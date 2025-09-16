import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import S from './stats.module.scss';

// Componente para animação de contagem
const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2 }: {
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

const Stats = () => {
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
                    <motion.h2 
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        A referência em securitização de recebíveis no mercado brasileiro¹
                    </motion.h2>
                    
                    <div className={S.grid}>
                        <motion.div 
                            className={S.item}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <div className={S.number}>
                                <AnimatedCounter value={500} suffix="+" duration={2.5} />
                            </div>
                            <div className={S.label}>empresas financiadas</div>
                        </motion.div>

                        <motion.div 
                            className={S.item}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            <div className={S.number}>
                                R$ <AnimatedCounter value={2.8} suffix="Bi" duration={2.8} />
                            </div>
                            <div className={S.label}>em recebíveis estruturados²</div>
                        </motion.div>

                        <motion.div 
                            className={S.item}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                        >
                            <div className={S.number}>
                                <AnimatedCounter value={48} suffix="h" duration={2.2} />
                            </div>
                            <div className={S.label}>tempo médio de liberação</div>
                        </motion.div>

                        <motion.div 
                            className={S.item}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        >
                            <div className={S.number}>
                                <AnimatedCounter value={98} suffix="%" duration={2.6} />
                            </div>
                            <div className={S.label}>taxa de aprovação³</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
