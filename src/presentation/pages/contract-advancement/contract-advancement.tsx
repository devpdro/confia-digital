import {
    Meta,
    ContractHeader,
    CreditBenefits,
    ContractTypes,
    ContractProcess,
    FAQ,
    CTA,
} from "src/presentation/components"

const FAQ_DATA = [
    {
        id: "1",
        question: "Quanto tempo demora para receber o dinheiro?",
        answer: "Após envio da documentação completa, a análise leva até 6 horas úteis e a liberação acontece via PIX ou TED no mesmo dia ou dia útil seguinte."
    },
    {
        id: "2",
        question: "Qual o valor mínimo e máximo para antecipação?",
        answer: "Operamos a partir de R$ 50 mil até R$ 2 milhões por operação. Para valores maiores, nossa <a href='/securitizacao-de-recebiveis'>solução de Securitização</a> pode ser mais adequada com condições especiais."
    },
    {
        id: "3",
        question: "Quanto recebo do valor total do contrato?",
        answer: "Antecipamos entre 70% e 90% do valor presente do contrato, dependendo do prazo restante, qualidade do pagador e histórico da empresa. O percentual é calculado na simulação gratuita."
    },
    {
        id: "4",
        question: "Quais tipos de contratos posso antecipar?",
        answer: "Antecipamos contratos de prestação de serviços, mensalidades de software, consultorias, manutenção predial, contratos de publicidade e marketing. O contrato deve estar assinado e com parcelas definidas."
    },
    {
        id: "5",
        question: "Qual a taxa de juros da antecipação?",
        answer: "Nossa taxa média é de 2,8% ao mês, mas pode variar entre 1,9% e 4,5% dependendo do prazo do contrato, qualidade do pagador e histórico da sua empresa. Sem taxas ocultas ou surpresas."
    },
    {
        id: "6",
        question: "E se meu cliente atrasar o pagamento das parcelas?",
        answer: "Nossa equipe faz a gestão de cobrança diretamente com seu cliente, preservando o relacionamento comercial. Em casos de inadimplência, você não precisa devolver o valor antecipado."
    },
    {
        id: "7",
        question: "Preciso de garantias ou avalistas?",
        answer: "Não exigimos garantias pessoais ou avalistas. A operação é baseada na qualidade do seu contrato e do pagador. Analisamos o histórico de pagamento e solidez financeira do cliente final."
    },
    {
        id: "8",
        question: "Quais documentos preciso enviar?",
        answer: "Contrato assinado, comprovantes de faturamento dos últimos 6 meses, documentos da empresa (CNPJ, contrato social) e dados do cliente pagador. Nossa equipe orienta todo o processo."
    },
    {
        id: "9",
        question: "Posso antecipar contratos de clientes do governo?",
        answer: "Sim! Antecipamos contratos com órgãos públicos municipais, estaduais e federais. Contratos governamentais têm condições ainda melhores devido à segurança de pagamento."
    }
];

const ContractAdvancement = () => (
    <div>
        <Meta
            title="Antecipação de Contratos | Dinheiro Hoje de R$50K a R$2M em 6h"
            description="Antecipe seus contratos e receba de R$50K a R$2M no mesmo dia. Mais de 2.800 operações já realizadas. Taxa média de 2,8% ao mês, aprovação rápida em até 6 horas e zero burocracia."
            keywords="dinheiro hoje, contratos dinheiro, antecipar contratos, capital mesmo dia, 6 horas aprovação, sem burocracia, R$ 50K 2M, taxa 2.8 mes"
            image="https://suasecuritizadora.com/og-antecipacao.png"
        />
        <ContractHeader />
        <CreditBenefits />
        <ContractTypes />
        <ContractProcess />
        <FAQ title="Perguntas frequentes sobre antecipação de contratos."
            items={FAQ_DATA} />
        <CTA 
            title="Pronto para antecipar seus contratos e ter dinheiro hoje?"
            subtitle="Faça uma simulação gratuita e descubra quanto pode receber pelos seus contratos em até 6 horas."
            buttonLabel="Simular antecipação"
        />
    </div>
)

export default ContractAdvancement
