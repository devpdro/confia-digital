import { IMAGE } from 'src/presentation/assets';
import { Button } from 'src/presentation/components';

import S from './help-company.module.scss';

const SOLUTIONS_DATA = [
    {
        image: IMAGE.PAPEL,
        alt: "Ícone de securitização de recebíveis",
        title: "Securitização de Recebíveis",
        description: "Transforme seus recebíveis em títulos negociáveis no mercado de capitais com estruturas CRI e CRA personalizadas.",
        link: "/securitizacao-de-recebiveis"
    },
    {
        image: IMAGE.MONEY_VOLTA,
        alt: "Ícone de antecipação de contratos",
        title: "Antecipação de Contratos",
        description: "Acelere seu fluxo de caixa antecipando contratos futuros com taxas competitivas e processo ágil.",
        link: "/antecipacao-de-contratos"
    },
    {
        image: IMAGE.PROTECAO,
        alt: "Ícone de estruturação customizada",
        title: "Estruturação Customizada",
        description: "Soluções financeiras sob medida para necessidades específicas do seu negócio e setor de atuação.",
        link: "/estruturacao-customizada"
    }
];

const HelpCompany = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.header}>
                        <h2 className={S.title}>
                            Nossas principais soluções financeiras.
                        </h2>
                        <p className={S.subtitle}>
                            Descubra como transformar seus recebíveis em capital de giro com nossas soluções especializadas,
                            desenvolvidas para acelerar o crescimento do seu negócio.
                        </p>
                    </div>

                    <div className={S.cards}>
                        {SOLUTIONS_DATA.map((item, index) => (
                            <div key={index} className={S.card}>
                                <div className={S.iconWrapper}>
                                    <img src={item.image.src} alt={item.alt} />
                                </div>
                                <h3 className={S.cardTitle}>{item.title}</h3>
                                <p className={S.cardDescription}>
                                    {item.description}
                                </p>
                                <div className={S.cardButton}>
                                    <Button
                                        typeStyle="btn3"
                                        label="Saiba mais"
                                        size="sm"
                                        width="180px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpCompany;