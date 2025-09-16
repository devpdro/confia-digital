import { Button } from 'src/presentation/components';
import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';

import S from './intranet-header.module.scss';

const IntranetHeader = () => {
    const scrollToPlatforms = () => {
        const platformsSection = document.querySelector('[data-section="intranet-platforms"]');
        if (platformsSection) {
            platformsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className={S.header}>
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
                        PORTAL DO CLIENTE
                    </motion.div>
                    <motion.h1 
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Acesse suas ferramentas de trabalho.
                    </motion.h1>
                    <motion.p 
                        className={S.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    >
                        Centralize o acesso às suas plataformas essenciais. Webmail corporativo, sistema de gestão e ferramentas de investimento em um só lugar para otimizar sua produtividade.
                    </motion.p>
                    
                    <motion.div 
                        className={S.linkInfo} 
                        onClick={scrollToPlatforms} 
                        style={{ cursor: 'pointer' }}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        whileHover={{ 
                            scale: 1.02, 
                            transition: { duration: 0.2, ease: "easeOut" } 
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <p>Acesse suas plataformas abaixo</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default IntranetHeader;
