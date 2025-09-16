import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';

import S from './about-awards.module.scss';

interface AboutAwardsProps {
    className?: string;
}

const AboutAwards: React.FC<AboutAwardsProps> = ({ className }) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <motion.div 
                    className={S.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.div 
                        className={S.textContent}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <motion.h2 
                            className={S.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Um líder reconhecido por pessoas como você.
                        </motion.h2>
                        <motion.p 
                            className={S.description}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            Ano após ano, somos reconhecidos pela nossa cultura sólida e por sermos um lugar incrível para trabalhar. Venha se juntar a nós.
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className={S.awardsContainer}
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        <img src={IMAGE.AWARDS_BAGDES.src} alt="Prêmios e reconhecimentos da empresa incluindo Best Places to Work, Great Place to Work Certified, America's Best Startup Employers e Best Fintech to Work For" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutAwards;