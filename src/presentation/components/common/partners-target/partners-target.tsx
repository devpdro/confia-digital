import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';

import S from './partners-target.module.scss';

interface PartnerType {
    name: string;
}

interface PartnersTargetProps {
    className?: string;
}

const PartnersTarget: React.FC<PartnersTargetProps> = ({ className }) => {
    const partnerTypes: PartnerType[] = [
        { name: 'Contadores e escritórios contábeis' },
        { name: 'Consultores financeiros' },
        { name: 'Assessores de investimentos' },
        { name: 'Corretoras de valores' },
        { name: 'Bancos de investimento' },
        { name: 'Gestoras de recursos' },
        { name: 'Fintechs de crédito' },
        { name: 'Plataformas de empréstimos' },
        { name: 'Correspondentes bancários' },
        { name: 'Consultorias empresariais' },
        { name: 'Escritórios de advocacia' },
        { name: 'Empresas de factoring' }
    ];

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
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.h2 
                            className={S.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            Quem é nosso parceiro?
                        </motion.h2>
                        <motion.ul 
                            className={S.partnerList}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            {partnerTypes.map((partner, index) => (
                                <motion.li 
                                    key={index} 
                                    className={S.partnerItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.5, 
                                        ease: "easeOut", 
                                        delay: 0.5 + (index * 0.05) 
                                    }}
                                    whileHover={{ 
                                        x: 5, 
                                        transition: { duration: 0.2, ease: "easeOut" } 
                                    }}
                                >
                                    <motion.span 
                                        className={S.bullet}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.3, 
                                            ease: "easeOut", 
                                            delay: 0.6 + (index * 0.05) 
                                        }}
                                    >
                                        •
                                    </motion.span>
                                    <span className={S.partnerName}>{partner.name}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    <motion.div 
                        className={S.imageContent}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <motion.div 
                            className={S.imageContainer}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            whileHover={{ 
                                scale: 1.02, 
                                transition: { duration: 0.3, ease: "easeOut" } 
                            }}
                        >
                            <img 
                                src={IMAGE.PESSOA_OLHANDO_FOLHA.src}
                                alt="Profissional analisando documentos - Diversos tipos de parceiros"
                                className={S.image}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersTarget;