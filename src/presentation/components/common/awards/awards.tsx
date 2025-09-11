import { IMAGE } from 'src/presentation/assets';

import S from './awards.module.scss';

const AWARDS_DATA = [
    {
        title: "Top 10 Empresas Mais Inovadoras em Serviços Financeiros",
        source: "Ranking Startups Brasil 2024"
    },
    {
        title: "Melhor Experiência em Serviços Financeiros Digitais",
        source: "Prêmio Inovação Financeira 2023"
    },
    {
        title: "Plataforma Financeira Mais Confiável",
        source: "Prêmio Confiança do Cliente 2024"
    },
    {
        title: "Destaque em Segurança Bancária Digital",
        source: "Associação Brasileira de Fintechs 2023"
    },
    {
        title: "Excelência em Atendimento ao Cliente",
        source: "Prêmio Satisfação do Consumidor 2023"
    }
];

const AWARDS = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>
                        Prêmios e parceiros.
                    </h2>

                    {/* Media Logos */}
                    <div className={S.mediaLogos}>
                        <img src={IMAGE.BMP.src} alt="Banco BMP" className={S.logoImage} />
                        <img src={IMAGE.ITAU.src} alt="Banco Itaú" className={S.logoImage} />
                        <img src={IMAGE.SERASA.src} alt="Serasa Experian" className={S.logoImage} />
                        <img src={IMAGE.GRAFENO.src} alt="Grafeno" className={S.logoImage} />
                        <img src={IMAGE.SINFAC.src} alt="Sinfac" className={S.logoImage} />
                        <img src={IMAGE.TERCON.src} alt="Tercon" className={S.logoImage} />
                    </div>

                    {/* Awards Grid */}
                    <div className={S.awards}>
                        <div className={S.firstRow}>
                            {AWARDS_DATA.slice(0, 3).map((award, index) => (
                                <div key={index} className={S.award}>
                                    <div className={S.awardIcon}>
                                        <img src={IMAGE.AWARD.src} alt="Prêmio" className={S.awardImage} />
                                    </div>
                                    <div className={S.awardContent}>
                                        <h3 className={S.awardTitle}>{award.title}</h3>
                                        <p className={S.awardSource}>{award.source}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={S.secondRow}>
                            {AWARDS_DATA.slice(3, 5).map((award, index) => (
                                <div key={index + 3} className={S.award}>
                                    <div className={S.awardIcon}>
                                        <img src={IMAGE.AWARD.src} alt="Prêmio" className={S.awardImage} />
                                    </div>
                                    <div className={S.awardContent}>
                                        <h3 className={S.awardTitle}>{award.title}</h3>
                                        <p className={S.awardSource}>{award.source}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AWARDS;