import React from 'react';
import { Button } from 'src/presentation/components';
import S from './business-services.module.scss';

interface BusinessServicesProps {
    className?: string;
    title?: string;
    description?: string;
    buttonLabel?: string;
    imageLeft?: boolean;
    mobileImage?: string;
    desktopImage?: string;
    mobileImageAlt?: string;
    desktopImageAlt?: string;
}

const BusinessServices: React.FC<BusinessServicesProps> = ({ 
    className,
    title = "Todos os seus serviços de securitização em um só lugar.",
    description = "Nunca mais dependa de processos burocráticos. Transforme recebíveis rapidamente, acompanhe operações, gerencie investidores e economize tempo com nossa plataforma integrada — tudo em um painel digital fácil de usar.",
    buttonLabel = "Explorar plataforma digital",
    imageLeft = true,
    mobileImage = "/api/placeholder/200/400",
    desktopImage = "/api/placeholder/400/300",
    mobileImageAlt = "Aplicativo móvel Confia Capital",
    desktopImageAlt = "Dashboard de securitização Confia Capital"
}) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={`${S.content} ${!imageLeft ? S.reversed : ''}`}>
                    <div className={S.imageContent}>
                        <div>
                            <div>
                                <img 
                                    src={mobileImage} 
                                    alt={mobileImageAlt}
                                />
                            </div>
                            <div>
                                <img 
                                    src={desktopImage} 
                                    alt={desktopImageAlt}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className={S.textContent}>
                        <h2 className={S.title}>
                            {title}
                        </h2>
                        
                        <div className={S.description}>
                            <p className={S.paragraph}>
                                {description}
                            </p>
                        </div>
                        
                        <div className={S.ctaContainer}>
                            <Button
                                typeStyle="btn2"
                                label={buttonLabel}
                                size="md"
                                width="260px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessServices;