import { IMAGE } from 'src/presentation/assets';
import { motion } from 'framer-motion';

import S from './awards.module.scss';

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
                        Parceiros.
                    </motion.h2>
                    <motion.h4
                        className={S.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    >
                        Contamos com parcerias estratégicas sólidas para oferecer soluções financeiras
                        seguras, ágeis e integradas.
                    </motion.h4>

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
                </motion.div>
            </div>
        </section>
    );
};

export default AWARDS;
