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
            buttonLink: "https://api.whatsapp.com/send?phone=5519981062535&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Confia%20Digital!"
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
                                        <a 
                                            href={card.buttonLink}
                                            target={card.buttonLink.startsWith('http') ? '_blank' : '_self'}
                                            rel={card.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Button
                                                typeStyle="btn1"
                                                label={card.buttonLabel}
                                                size="sm"
                                                width="200px"
                                            />
                                        </a>
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