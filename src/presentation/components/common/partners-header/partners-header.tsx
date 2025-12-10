import React from 'react';
import { motion } from 'framer-motion';
import S from './partners-header.module.scss';
import { Button } from '../../form';

interface PartnersHeaderProps {
    className?: string;
}

const PartnersHeader: React.FC<PartnersHeaderProps> = ({ className }) => {
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
                        PARCEIROS
                    </motion.div>
                    <motion.h1 
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Seja nosso parceiro de sucesso.
                    </motion.h1>
                    <motion.p 
                        className={S.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    >
                        Junte-se à nossa rede de parceiros e ofereça soluções inovadoras de securitização aos seus clientes. Cresça conosco no mercado de capitais.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <a 
                            href="https://api.whatsapp.com/send?phone=5519981062535&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20ser%20parceiro%20da%20Confia%20Capital!%20Podem%20me%20ajudar%20com%20informa%C3%A7%C3%B5es%20sobre%20a%20parceria?"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                typeStyle="btn1"
                                label="Quero ser parceiro"
                                size="md"
                                width="320px"
                            />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersHeader;