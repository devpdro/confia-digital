import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';

import S from './awards.module.scss';

const AWARDS_DATA = [
    {
        title: "Top 10 Empresas Mais Inovadoras em Serviços Financeiros",
        source: "Ranking Startups Brasil 2024"
    },
    {
        title: "Melhor Experiência em Serviços Financeiros Digitais",
        source: "Prêmio Inovação Financeira 2023"
    },
    {
        title: "Plataforma Financeira Mais Confiável",
        source: "Prêmio Confiança do Cliente 2024"
    },
    {
        title: "Destaque em Segurança Bancária Digital",
        source: "Associação Brasileira de Fintechs 2023"
    },
    {
        title: "Excelência em Atendimento ao Cliente",
        source: "Prêmio Satisfação do Consumidor 2023"
    }
];

type MediaLogo = {
    src: string;
    alt: string;
    noFilter?: boolean;
};

const MEDIA_LOGOS: MediaLogo[] = [
    { src: IMAGE.CELCOIN.src, alt: "Celcoin" },
    { src: IMAGE.UNICO.src, alt: "Unico" },
    { src: IMAGE.B3_LOGO.src, alt: "B3" },
    { src: IMAGE.SERASA.src, alt: "Serasa" },
    { src: IMAGE.LOGO_VAAS.src, alt: "Vaas" },
    { src: IMAGE.BMP.src, alt: "Banco BMP" }
];

const AWARDS = () => {
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
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        Prêmios e parceiros.
                    </motion.h2>
                    <motion.h4 
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Somos amplamente reconhecidos pela excelência em securitização de recebíveis,
                        nossos serviços especializados e parcerias estratégicas sólidas.
                    </motion.h4>

                    {/* Media Logos */}
                    <motion.div 
                        className={S.mediaLogos}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    >
                        {MEDIA_LOGOS.map((logo, index) => (
                            <motion.img 
                                key={index}
                                src={logo.src} 
                                alt={logo.alt} 
                                className={logo.noFilter ? S.logoImageNoFilter : S.logoImage}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5, 
                                    ease: "easeOut", 
                                    delay: 0.4 + (index * 0.05) 
                                }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    transition: { duration: 0.2, ease: "easeOut" } 
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Awards Grid */}
                    <div className={S.awards}>
                        <motion.div 
                            className={S.firstRow}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                        >
                            {AWARDS_DATA.slice(0, 3).map((award, index) => (
                                <motion.div 
                                    key={index} 
                                    className={S.award}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: 0.6 + (index * 0.1) 
                                    }}
                                    whileHover={{ 
                                        y: -3, 
                                        transition: { duration: 0.3, ease: "easeOut" } 
                                    }}
                                >
                                    <motion.div 
                                        className={S.awardIcon}
                                        initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeOut", 
                                            delay: 0.7 + (index * 0.1) 
                                        }}
                                    >
                                        <img src={IMAGE.AWARD.src} alt="Prêmio" className={S.awardImage} />
                                    </motion.div>
                                    <motion.div 
                                        className={S.awardContent}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut", 
                                            delay: 0.8 + (index * 0.1) 
                                        }}
                                    >
                                        <h3 className={S.awardTitle}>{award.title}</h3>
                                        <p className={S.awardSource}>{award.source}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div 
                            className={S.secondRow}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
                        >
                            {AWARDS_DATA.slice(3, 5).map((award, index) => (
                                <motion.div 
                                    key={index + 3} 
                                    className={S.award}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        ease: "easeOut", 
                                        delay: 0.9 + (index * 0.1) 
                                    }}
                                    whileHover={{ 
                                        y: -3, 
                                        transition: { duration: 0.3, ease: "easeOut" } 
                                    }}
                                >
                                    <motion.div 
                                        className={S.awardIcon}
                                        initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                                        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeOut", 
                                            delay: 1.0 + (index * 0.1) 
                                        }}
                                    >
                                        <img src={IMAGE.AWARD.src} alt="Prêmio" className={S.awardImage} />
                                    </motion.div>
                                    <motion.div 
                                        className={S.awardContent}
                                        initial={{ opacity: 0, x: -15 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut", 
                                            delay: 1.1 + (index * 0.1) 
                                        }}
                                    >
                                        <h3 className={S.awardTitle}>{award.title}</h3>
                                        <p className={S.awardSource}>{award.source}</p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AWARDS;
