import React from 'react';
import { motion } from 'framer-motion';
import S from './intranet-platforms.module.scss';
import { Button } from '../../form';

interface IntranetPlatform {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
}

interface IntranetPlatformsProps {
    platforms?: IntranetPlatform[];
}

const DEFAULT_PLATFORMS: IntranetPlatform[] = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" stroke="#010553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: "Webmail",
        description: "Acesse e gerencie seus e-mails corporativos de forma rápida.",
        link: "http://webmail.confiacapital.com.br"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="#010553" strokeWidth="2" />
                <line x1="9" y1="9" x2="9" y2="15" stroke="#010553" strokeWidth="2" />
                <line x1="15" y1="9" x2="15" y2="15" stroke="#010553" strokeWidth="2" />
                <line x1="9" y1="12" x2="15" y2="12" stroke="#010553" strokeWidth="2" />
            </svg>
        ),
        title: "Smart Securities",
        description: "Acompanhe suas operações financeiras de forma completa.",
        link: "https://www.smartsecurities.com.br/smartsecurities/"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" y1="1" x2="12" y2="23" stroke="#010553" strokeWidth="2" />
                <path d="M17 5H9.5A3.5 3.5 0 0 0 6 8.5V8.5A3.5 3.5 0 0 0 9.5 12H14.5A3.5 3.5 0 0 1 18 15.5V15.5A3.5 3.5 0 0 1 14.5 19H6" stroke="#010553" strokeWidth="2" />
            </svg>
        ),
        title: "HotInvest",
        description: "Invista em produtos exclusivos com alta rentabilidade.",
        link: "https://hotinvest.dbs.moneyp.com.br/login"
    }
];

const IntranetPlatforms: React.FC<IntranetPlatformsProps> = ({
    platforms = DEFAULT_PLATFORMS
}) => {
    return (
        <section className={S.section} data-section="intranet-platforms">
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div 
                        className={S.cards}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        {platforms.map((platform, index) => (
                            <motion.div 
                                key={index} 
                                className={S.card}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    ease: "easeOut", 
                                    delay: 0.3 + (index * 0.1) 
                                }}
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.02,
                                    transition: { duration: 0.3, ease: "easeOut" } 
                                }}
                            >
                                <a
                                    href={platform.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={S.cardLink}
                                >
                                    <motion.div 
                                        className={S.iconWrapper}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeOut", 
                                            delay: 0.4 + (index * 0.1) 
                                        }}
                                    >
                                        {platform.icon}
                                    </motion.div>
                                    <motion.h3 
                                        className={S.cardTitle}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut", 
                                            delay: 0.5 + (index * 0.1) 
                                        }}
                                    >
                                        {platform.title}
                                    </motion.h3>
                                    <motion.p 
                                        className={S.cardDescription}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut", 
                                            delay: 0.6 + (index * 0.1) 
                                        }}
                                    >
                                        {platform.description}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.8, 
                                            ease: "easeOut", 
                                            delay: 0.7 + (index * 0.1) 
                                        }}
                                    >
                                        <Button
                                            typeStyle="btn3"
                                            label="Acessar plataforma"
                                            size="sm"
                                            width="240px"
                                        />
                                    </motion.div>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default IntranetPlatforms;