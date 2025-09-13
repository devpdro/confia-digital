import {
    Meta,
    ContractHeader,
    Benefits,
    CTA,
    FAQ,
    Process,
    Trust,
} from "src/presentation/components"
import BusinessCardPromo from "src/presentation/components/common/business-card-promo/business-card-promo";
import BusinessServices from "src/presentation/components/common/business-services/business-services";
import ContractTypes from "src/presentation/components/common/contract-types/contract-types";
import CTACards from "src/presentation/components/common/cta-cards/cta-cards";
import Testimonial from "src/presentation/components/common/testimonial/testimonial";

const FAQ_DATA = [
    {
        id: "1",
        question: "Quais tipos de contratos posso antecipar?",
        answer: "Antecipamos contratos de prestação de serviços, mensalidades de software, consultorias, manutenção predial, contratos de publicidade e marketing. O contrato deve estar assinado e com parcelas definidas."
    },
    {
        id: "2",
        question: "Qual o valor mínimo e máximo para antecipação?",
        answer: "Operamos a partir de R$ 50 mil até R$ 2 milhões por operação. Para valores maiores, nossa <a href='#'>solução de Securitização</a> pode ser mais adequada com condições especiais."
    },
    {
        id: "3",
        question: "Quanto recebo do valor total do contrato?",
        answer: "Antecipamos entre 70% e 90% do valor presente do contrato, dependendo do prazo restante, qualidade do pagador e histórico da empresa. O percentual é calculado na simulação."
    },
    {
        id: "4",
        question: "Quanto tempo demora para receber o dinheiro?",
        answer: "Após envio da documentação completa, a análise leva até 6 horas úteis e a liberação acontece via PIX ou TED no mesmo dia ou dia útil seguinte."
    },
    {
        id: "5",
        question: "E se meu cliente atrasar o pagamento das parcelas?",
        answer: "Nossa equipe faz a gestão de cobrança diretamente com seu cliente, preservando o relacionamento comercial. Em casos de inadimplência, você não precisa devolver o valor antecipado."
    }
];

const CustomStructuring = () => (
    <div>
        <Meta
            title="Antecipação de Contratos | Dinheiro Hoje de R$50K a R$2M em 6h"
            description="Antecipe seus contratos e receba de R$50K a R$2M no mesmo dia. Mais de 2.800 operações já realizadas. Taxa média de 2,8% ao mês, aprovação rápida em até 6 horas e zero burocracia."
            keywords="dinheiro hoje, contratos dinheiro, antecipar contratos, capital mesmo dia, 6 horas aprovação, sem burocracia, R$ 50K 2M, taxa 2.8 mes"
            image="https://suasecuritizadora.com/og-antecipacao.png"
        />
        <ContractHeader />
        <BusinessServices />
        <Testimonial />
        <Trust />
        <BusinessServices />
        <Process />
        <CTACards />
        <FAQ title="Perguntas frequentes sobre antecipação de contratos."
            items={FAQ_DATA} />
        <CTA />
    </div>
)

export default CustomStructuring
