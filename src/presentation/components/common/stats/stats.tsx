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

interface StatItem {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    duration?: number;
}

interface StatsProps {
    title?: string;
    stats?: StatItem[];
}

const DEFAULT_STATS: StatItem[] = [
    {
        value: 500,
        suffix: "+",
        label: "empresas financiadas",
        duration: 2.5
    },
    {
        value: 2.8,
        prefix: "R$ ",
        suffix: "Bi",
        label: "em recebíveis estruturados²",
        duration: 2.8
    },
    {
        value: 48,
        suffix: "h",
        label: "tempo médio de liberação",
        duration: 2.2
    },
    {
        value: 98,
        suffix: "%",
        label: "taxa de aprovação³",
        duration: 2.6
    }
];

const Stats: React.FC<StatsProps> = ({ 
    title = "A referência em securitização de recebíveis no mercado brasileiro¹",
    stats = DEFAULT_STATS 
}) => {
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
                        {title}
                    </motion.h2>
                    
                    <div className={S.grid}>
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                className={S.item}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + (index * 0.1) }}
                            >
                                <div className={S.number}>
                                    <AnimatedCounter 
                                        value={stat.value} 
                                        prefix={stat.prefix || ''}
                                        suffix={stat.suffix || ''} 
                                        duration={stat.duration || 2.5} 
                                    />
                                </div>
                                <div className={S.label}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
