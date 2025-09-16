import { IMAGE } from 'src/presentation/assets';

import S from './about-awards.module.scss';

interface AboutAwardsProps {
    className?: string;
}

const AboutAwards: React.FC<AboutAwardsProps> = ({ className }) => {
    return (
        <section className={`${S.section} ${className || ''}`}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.textContent}>
                        <h2 className={S.title}>
                            Um líder reconhecido por pessoas como você.
                        </h2>
                        <p className={S.description}>
                            Ano após ano, somos reconhecidos pela nossa cultura sólida e por sermos um lugar incrível para trabalhar. Venha se juntar a nós.
                        </p>
                    </div>

                    <div className={S.awardsContainer}>
                        <img src={IMAGE.AWARDS_BAGDES.src} alt="Prêmios e reconhecimentos da empresa incluindo Best Places to Work, Great Place to Work Certified, America's Best Startup Employers e Best Fintech to Work For" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAwards;