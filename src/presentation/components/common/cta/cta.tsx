import { Button } from 'src/presentation/components';
import Link from 'next/link';

import S from './cta.module.scss';

interface CTAProps {
    title?: string;
    subtitle?: string;
    buttonLabel?: string;
    buttonLink?: string;
}

const CTA: React.FC<CTAProps> = ({
    title = "Pronto para transformar seus recebíveis em capital imediato?",
    subtitle = "Faça uma simulação sem compromisso e descubra quanto pode receber pelos seus recebíveis.",
    buttonLabel = "Simular operação",
    buttonLink = "/solicitar-proposta"
}) => {
    return (
        <section className={S.section}>
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
                            />
                        </Link>

                        <div className={S.additionalInfo}>
                            <p className={S.infoText}>
                                Tem dúvidas sobre o processo?
                            </p>
                            <p className={S.linkText}>
                                Acesse nosso <Link href="/perguntas-frequentes" className={S.link}>Painel de Dúvidas</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;