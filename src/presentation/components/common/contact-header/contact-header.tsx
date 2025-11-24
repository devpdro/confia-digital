import { Button } from 'src/presentation/components';
import { Globe } from 'src/presentation/components/common/globe/globe';
import { IconMail, IconBrandWhatsapp, IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import S from './contact-header.module.scss';

const ContactHeader = () => {
    return (
        <section className={S.header}>
            <div className={S.wrapper}>
                <motion.div
                    className={S.content}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className={S.text}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <motion.h1
                            className={S.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        >
                            Precisa de ajuda?
                            <br />
                            Estamos aqui.
                        </motion.h1>

                        <motion.p
                            className={S.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            Nossa equipe está pronta para ajudar você. Entre em contato através do email ou WhatsApp e receba atendimento personalizado.
                        </motion.p>

                        <motion.div
                            className={S.contactMethods}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        >
                            {/* Email Contact */}
                            <div className={S.contactItem}>
                                <div className={S.iconWrapper}>
                                    <IconMail size={24} />
                                </div>
                                <div className={S.contactInfo}>
                                    <p className={S.contactLabel}>
                                        Você pode falar conosco através do nosso email:
                                    </p>
                                    <p className={S.contactValue}>
                                        sac@confiacapital.com.br
                                    </p>
                                    <motion.div
                                        className={S.button}
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <a href="mailto:sac@confiacapital.com.br">
                                            <Button
                                                typeStyle="btn1"
                                                label="Enviar email"
                                                size="md"
                                                width={{ base: "100%", xs: "240px" }}
                                            />
                                        </a>
                                    </motion.div>
                                </div>
                            </div>

                            {/* WhatsApp Contact */}
                            <div className={S.contactItem}>
                                <div className={S.iconWrapper}>
                                    <IconBrandWhatsapp size={24} />
                                </div>
                                <div className={S.contactInfo}>
                                    <p className={S.contactLabel}>
                                        Você também pode falar com nosso suporte pelo{' '}
                                        <strong>WhatsApp</strong>, através de um atendente humano:
                                    </p>
                                    <p className={S.contactValue}>
                                        19 98106-2535
                                    </p>
                                    <motion.div
                                        className={S.button}
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <a
                                            href="https://api.whatsapp.com/send?phone=5519981062535&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Confia%20Capital!"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button
                                                typeStyle="btn1"
                                                label="Enviar mensagem"
                                                size="md"
                                                width={{ base: "100%", xs: "240px" }}
                                            />
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className={S.visual}
                        initial={{ opacity: 0, scale: 0.98, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <Globe />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHeader;

