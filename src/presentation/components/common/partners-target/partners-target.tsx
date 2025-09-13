import React from 'react';
import S from './partners-target.module.scss';

interface PartnerType {
    name: string;
}

interface PartnersTargetProps {
    className?: string;
}

const PartnersTarget: React.FC<PartnersTargetProps> = ({ className }) => {
    const partnerTypes: PartnerType[] = [
        { name: 'Contadores' },
        { name: 'Editores de conteúdo' },
        { name: 'Sites afiliados' },
        { name: 'Mercados de empréstimos comerciais' },
        { name: 'Corretores de arrendamento de equipamentos' },
        { name: 'Provedores de serviços comerciais ou ISOs' },
        { name: 'Fornecedores de software e tecnologia' },
        { name: 'Mercados B2B e B2C' },
        { name: 'Prestadores de serviços financeiros' },
        { name: 'Prestadores de serviços de formação empresarial' },
        { name: 'Marcas de varejo' },
        { name: 'Seguradoras e corretoras' }
    ];

    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.textContent}>
                        <h2 className={S.title}>Quem é nosso parceiro?</h2>
                        <ul className={S.partnerList}>
                            {partnerTypes.map((partner, index) => (
                                <li key={index} className={S.partnerItem}>
                                    <span className={S.bullet}>•</span>
                                    <span className={S.partnerName}>{partner.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={S.imageContent}>
                        <div className={S.imageContainer}>
                            <img 
                                src="/api/placeholder/400/300" 
                                alt="Profissional trabalhando no escritório"
                                className={S.image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersTarget;