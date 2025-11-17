import React from 'react';

import { motion } from 'framer-motion';

import S from './reviews-header.module.scss';

interface PartnersHeaderProps {
    className?: string;
}

const ReviewsHeader: React.FC<PartnersHeaderProps> = ({ className }) => {
    return (
        <section className={`${S.header} ${className || ''}`}>
            <div className={S.wrapper}>
                <motion.div 
                    className={S.centeredContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div 
                        className={S.badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        DEPOIMENTOS
                    </motion.div>
                    <motion.h1 
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        O que nossos clientes dizem.
                    </motion.h1>
                    <motion.p 
                        className={S.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        Conheça as experiências reais de empresas que transformaram seus resultados com nossas soluções financeiras inovadoras e personalizadas.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default ReviewsHeader;
