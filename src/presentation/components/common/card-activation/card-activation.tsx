import { Button } from 'src/presentation/components/form';
import Link from 'next/link';
import S from './card-activation.module.scss';

interface CardActivationProps {
    title?: string;
    description?: string;
    cards?: {
        title: string;
        description: string;
        buttonLabel: string;
        buttonLink?: string;
    }[];
}

const CardActivation: React.FC<CardActivationProps> = ({
    title = "Precisa de acesso às nossas plataformas?",
    description = "Aqui estão duas maneiras simples de solicitar acesso ou resolver problemas com suas credenciais.",
    cards = [
        {
            title: "Por e-mail",
            description: "Envie um e-mail solicitando acesso ou recuperação de credenciais.",
            buttonLabel: "Solicitar acesso",
            buttonLink: "mailto:suporte@confiacapital.com.br"
        },
        {
            title: "WhatsApp",
            description: "Entre em contato via WhatsApp para suporte rápido e direto.",
            buttonLabel: "Entrar em contato",
            buttonLink: "https://wa.me/5511987654321"
        }
    ]
}) => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        {title}
                    </h2>
                    
                    <p className={S.description}>
                        {description}
                    </p>
                    
                    <div className={S.cards}>
                        {cards.map((card, index) => (
                            <div key={index} className={S.card}>
                                <h3 className={S.cardTitle}>{card.title}</h3>
                                <p className={S.cardDescription}>
                                    {card.description}
                                </p>
                                <div className={S.cardButton}>
                                    {card.buttonLink ? (
                                        <Link href={card.buttonLink}>
                                            <Button
                                                typeStyle="btn1"
                                                label={card.buttonLabel}
                                                size="sm"
                                                width="200px"
                                            />
                                        </Link>
                                    ) : (
                                        <Button
                                            typeStyle="btn1"
                                            label={card.buttonLabel}
                                            size="sm"
                                            width="200px"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardActivation;