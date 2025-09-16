import { IMAGE } from 'src/presentation/assets';

import S from './partners-target.module.scss';

interface PartnerType {
    name: string;
}

interface PartnersTargetProps {
    className?: string;
}

const PartnersTarget: React.FC<PartnersTargetProps> = ({ className }) => {
    const partnerTypes: PartnerType[] = [
        { name: 'Contadores e escritórios contábeis' },
        { name: 'Consultores financeiros' },
        { name: 'Assessores de investimentos' },
        { name: 'Corretoras de valores' },
        { name: 'Bancos de investimento' },
        { name: 'Gestoras de recursos' },
        { name: 'Fintechs de crédito' },
        { name: 'Plataformas de empréstimos' },
        { name: 'Correspondentes bancários' },
        { name: 'Consultorias empresariais' },
        { name: 'Escritórios de advocacia' },
        { name: 'Empresas de factoring' }
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
                                src={IMAGE.HOMEM_COMPUTADOR.src}
                                alt="Profissional trabalhando no computador"
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