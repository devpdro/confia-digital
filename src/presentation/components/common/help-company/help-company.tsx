import { IMAGE } from 'src/presentation/assets';

import S from './help-company.module.scss';

const CREDIT_ACCESS_DATA = [
    {
        image: IMAGE.PAPEL,
        alt: "Ícone de documentos e papéis",
        title: "Sem impacto no balanço",
        description: "Operação de cessão de recebíveis que não gera endividamento na empresa, preservando sua capacidade de crédito."
    },
    {
        image: IMAGE.MONEY_VOLTA,
        alt: "Ícone de dinheiro e retorno financeiro",
        title: "Até 85% do valor presente",
        description: "Antecipamos até 85% do valor dos seus recebíveis com base na qualidade dos sacados e prazo médio de pagamento."
    },
    {
        image: IMAGE.PROTECAO,
        alt: "Ícone de proteção e segurança",
        title: "Proteção jurídica total",
        description: "Cessão fiduciária registrada em cartório garante segurança jurídica e proteção contra riscos de cobrança."
    }
];

const HelpCompany = () => {
    return (
        <section className={S.section}>
            <div className={S.container}>
                <div className={S.content}>
                    <div className={S.header}>
                        <h2 className={S.title}>
                            Acesso rápido e fácil a uma linha de crédito empresarial.
                        </h2>
                        <p className={S.subtitle}>
                            Acesse o financiamento flexível que você precisa para administrar e expandir seu negócio sem problemas,
                            com taxas de juros competitivas e pagamentos automáticos.
                        </p>
                    </div>

                    <div className={S.cards}>
                        {CREDIT_ACCESS_DATA.map((item, index) => (
                            <div key={index} className={S.card}>
                                <div className={S.iconWrapper}>
                                    <img src={item.image.src} alt={item.alt} />
                                </div>
                                <h3 className={S.cardTitle}>{item.title}</h3>
                                <p className={S.cardDescription}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpCompany;