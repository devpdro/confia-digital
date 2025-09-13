import React from 'react';
import S from './business-services.module.scss';

interface BusinessServicesProps {
    className?: string;
}

const BusinessServices: React.FC<BusinessServicesProps> = ({ className }) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.imageContent}>
                        <div className={S.devicesContainer}>
                            <div className={S.phoneDevice}>
                                <img 
                                    src="/api/placeholder/200/400" 
                                    alt="Aplicativo móvel Bluevine"
                                    className={S.phoneImage}
                                />
                            </div>
                            <div className={S.desktopDevice}>
                                <img 
                                    src="/api/placeholder/400/300" 
                                    alt="Dashboard web Bluevine"
                                    className={S.desktopImage}
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className={S.textContent}>
                        <h2 className={S.title}>
                            Todos os seus serviços bancários empresariais em um só lugar.
                        </h2>
                        
                        <div className={S.description}>
                            <p className={S.paragraph}>
                                Nunca mais entre em um banco. Movimente dinheiro rapidamente, 
                                acompanhe despesas, pague contas e economize tempo com 
                                integrações de software convenientes — tudo em um painel móvel 
                                fácil de usar.
                            </p>
                        </div>
                        
                        <div className={S.ctaContainer}>
                            <button className={S.ctaButton}>
                                Explorar a verificação empresarial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessServices;