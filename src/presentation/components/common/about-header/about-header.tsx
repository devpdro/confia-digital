import { motion } from 'framer-motion';
import S from './about-header.module.scss';

interface AboutHeaderProps {
    className?: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ className }) => {
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
                        SOBRE NÓS
                    </motion.div>
                    <motion.h1 
                        className={S.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Quem somos e nossa missão.
                    </motion.h1>
                    <motion.p 
                        className={S.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        Somos uma securitizadora autorizada pela CVM, dedicada a democratizar o acesso ao mercado de capitais. Nossa história é construída sobre pilares de inovação, transparência e compromisso com o crescimento sustentável de nossos parceiros.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHeader;
