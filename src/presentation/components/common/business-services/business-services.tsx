import React from 'react';
import { Button } from 'src/presentation/components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import S from './business-services.module.scss';

interface BusinessServicesProps {
    className?: string;
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonLink?: string;
    imageLeft?: boolean;
    desktopImage?: string;
    desktopImageAlt?: string;
}

const BusinessServices: React.FC<BusinessServicesProps> = ({ 
    className,
    title = "Todos os seus serviços de securitização em um só lugar.",
    description = "Nunca mais dependa de processos burocráticos. Transforme recebíveis rapidamente, acompanhe operações, gerencie investidores e economize tempo com nossa plataforma integrada — tudo em um painel digital fácil de usar.",
    buttonLabel = "Solicitar proposta",
    buttonLink = "/solicitar-proposta",
    imageLeft = true,
    desktopImage = "/api/placeholder/400/300",
    desktopImageAlt = "Dashboard de securitização Confia Capital"
}) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <motion.div 
                    className={`${S.content} ${!imageLeft ? S.reversed : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div 
                        className={S.imageContent}
                        initial={{ opacity: 0, x: imageLeft ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <img 
                                src={desktopImage} 
                                alt={desktopImageAlt}
                            />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className={S.textContent}
                        initial={{ opacity: 0, x: imageLeft ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.h2 
                            className={S.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            {title}
                        </motion.h2>
                        
                        <motion.div 
                            className={S.description}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            <p className={S.paragraph}>
                                {description}
                            </p>
                        </motion.div>
                        
                        <motion.div 
                            className={S.ctaContainer}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Link href={buttonLink}>
                                <Button
                                    typeStyle="btn2"
                                    label={buttonLabel}
                                    size="md"
                                    width="260px"
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default BusinessServices;