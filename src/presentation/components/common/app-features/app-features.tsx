"use client";

import { motion } from "framer-motion";
import { Iphone } from "src/presentation/components";
import Link from "next/link";

import S from './app-features.module.scss';

export interface AppFeature {
    id: string;
    header: string;
    title: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    ctaLink: string;
}

export interface AppFeaturesProps {
    title: string;
    subtitle: string;
    features: AppFeature[];
    className?: string;
}

const AppFeatures: React.FC<AppFeaturesProps> = ({
    title,
    subtitle,
    features,
    className
}) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <motion.div
                    className={S.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className={S.title}>{title}</h2>
                    <p className={S.subtitle}>{subtitle}</p>
                </motion.div>

                <div className={S.features}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className={S.featureCard}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.2
                            }}
                        >
                            <div className={S.phoneContainer}>
                                <Iphone alt={`Mockup ${feature.title}`} />
                            </div>
                            <div className={S.content}>
                                <span className={S.featureHeader}>{feature.header}</span>
                                <h3 className={S.featureTitle}>{feature.title}</h3>
                                <h4 className={S.featureSubtitle}>{feature.subtitle}</h4>
                                <p className={S.featureDescription}>{feature.description}</p>
                                <Link href={feature.ctaLink} className={S.ctaButton}>
                                    {feature.ctaLabel}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppFeatures;


