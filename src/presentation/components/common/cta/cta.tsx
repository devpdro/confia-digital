import { Button } from 'src/presentation/components';
import { IconMail, IconBrandWhatsapp } from '@tabler/icons-react';
import Link from 'next/link';

import S from './cta.module.scss';

interface CTAProps {
    title?: string;
    subtitle?: string;
    buttonLabel?: string;
    buttonLink?: string;
    themeColor?: string;
    buttonColor?: string;
    showContact?: boolean;
    contactEmail?: string;
    contactWhatsApp?: string;
}

const CTA: React.FC<CTAProps> = ({
    title = "Pronto para transformar seus recebíveis em capital imediato?",
    subtitle = "Faça uma simulação sem compromisso e descubra quanto pode receber pelos seus recebíveis.",
    buttonLabel = "Solicite uma proposta",
    buttonLink = "/solicitar-proposta",
    themeColor,
    buttonColor,
    showContact = false,
    contactEmail = "sac@confiacapital.com.br",
    contactWhatsApp = "5519981062535"
}) => {
    return (
        <section className={S.section} style={themeColor ? { backgroundColor: themeColor } : undefined}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.textContent}>
                        <h2 className={S.title}>
                            {title}
                        </h2>
                        <p className={S.subtitle}>
                            {subtitle}
                        </p>
                    </div>

                    <div className={S.actionContent}>
                        <Link href={buttonLink}>
                            <Button
                                typeStyle="btn2"
                                label={buttonLabel}
                                size="md"
                                width={{ base: "220px", xs: "100%" }}
                                accentColor={buttonColor}
                            />
                        </Link>

                        {showContact ? (
                            <div className={S.contactInfo}>
                                <a href={`mailto:${contactEmail}`} className={S.contactLink}>
                                    <IconMail size={18} />
                                    <span>{contactEmail}</span>
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send?phone=${contactWhatsApp}&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Confia%20Capital!`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={S.contactLink}
                                >
                                    <IconBrandWhatsapp size={18} />
                                    <span>19 98106-2535</span>
                                </a>
                            </div>
                        ) : (
                            <div className={S.additionalInfo}>
                                <p className={S.infoText}>
                                    Tem dúvidas sobre o processo?
                                </p>
                                <p className={S.linkText}>
                                    Acesse nosso <Link href="/perguntas-frequentes" className={S.link}>Painel de Dúvidas</Link>.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;