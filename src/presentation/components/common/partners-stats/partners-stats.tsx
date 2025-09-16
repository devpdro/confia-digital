import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import S from './partners-stats.module.scss';

interface Stat {
    label: string;
    value: string;
    numericValue?: number;
    prefix?: string;
    suffix?: string;
}

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

interface PartnersStatsProps {
    className?: string;
}

const stats: Stat[] = [
    {
        label: 'Parceiros Ativos',
        value: '200+',
        numericValue: 200,
        suffix: '+'
    },
    {
        label: 'Volume Securitizado',
        value: 'R$ 1,8B+',
        numericValue: 2,
        prefix: 'R$ ',
        suffix: 'B+'
    },
    {
        label: 'Operações Realizadas',
        value: '1.200+',
        numericValue: 1200,
        suffix: '+'
    }
];


const PartnersStats: React.FC<PartnersStatsProps> = ({ className }) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <motion.div 
                    className={S.statsGrid}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            className={S.statItem}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.7, 
                                ease: "easeOut", 
                                delay: index * 0.1 
                            }}
                            whileHover={{ 
                                y: -5, 
                                transition: { duration: 0.3, ease: "easeOut" } 
                            }}
                        >
                            <motion.div 
                                className={S.statLabel}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    ease: "easeOut", 
                                    delay: (index * 0.1) + 0.2 
                                }}
                            >
                                {stat.label}
                            </motion.div>
                            <motion.div 
                                className={S.statValue}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.8, 
                                    ease: "easeOut", 
                                    delay: (index * 0.1) + 0.3 
                                }}
                            >
                                {stat.numericValue ? (
                                    <AnimatedCounter 
                                        value={stat.numericValue}
                                        prefix={stat.prefix || ''}
                                        suffix={stat.suffix || ''}
                                        duration={2.5 + (index * 0.2)}
                                    />
                                ) : (
                                    stat.value
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersStats;