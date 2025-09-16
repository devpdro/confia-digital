import {
    Meta,
    SecuritizationHeader,
    SecuritizationStats,
    CreditAccess,
    BusinessCardPromo,
    OperationSteps,
    Support,
    CTA,
    FAQ,
} from "src/presentation/components"

const FAQ_DATA = [
    {
        id: "1",
        question: "O que é securitização de recebíveis e como funciona?",
        answer: "Securitização é a transformação dos seus recebíveis (duplicatas, contratos, notas fiscais) em títulos negociáveis através de cessão fiduciária. Você recebe o capital imediatamente enquanto os investidores recebem os pagamentos futuros dos seus clientes."
    },
    {
        id: "2",
        question: "Qual o valor mínimo para uma operação de securitização?",
        answer: "Operamos com valores a partir de R$ 500 mil em recebíveis. Para operações menores, recomendamos nossa <a href='#'>solução de Antecipação de Contratos</a> que tem requisitos mais flexíveis."
    },
    {
        id: "3",
        question: "Securitização conta como endividamento no meu balanço?",
        answer: "Não. A securitização é uma operação de cessão de ativos, não de endividamento. Isso preserva sua capacidade de crédito e não impacta os indicadores financeiros da empresa junto a bancos e fornecedores."
    },
    {
        id: "4",
        question: "Quais tipos de recebíveis podem ser securitizados?",
        answer: "Securitizamos duplicatas comerciais, contratos de prestação de serviços, mensalidades educacionais, aluguéis e recebíveis do agronegócio. O importante é ter sacados com bom histórico de pagamento e dispersão adequada da carteira."
    },
    {
        id: "5",
        question: "Quanto tempo leva para liberar os recursos?",
        answer: "O processo completo leva entre 48h e 72h úteis: 24h para análise dos recebíveis, 24h para estruturação jurídica e até 24h adicionais para liberação após assinatura dos contratos."
    },
    {
        id: "6",
        question: "Como é calculada a taxa de securitização?",
        answer: "A taxa é baseada na qualidade dos seus sacados, prazo médio dos recebíveis, dispersão da carteira e histórico de inadimplência. Fazemos rating interno de cada pagador para precificar adequadamente o risco."
    },
    {
        id: "7",
        question: "O que acontece se meu cliente não pagar o recebível securitizado?",
        answer: "Em caso de inadimplência, nossa equipe de cobrança atua na recuperação através de métodos extrajudiciais e judiciais. O risco é assumido pelos investidores, não retornando para sua empresa após a cessão fiduciária."
    }
];

const ReceivablesSecuritization = () => (
    <div>
        <Meta
            title="Securitização de Recebíveis com capital em até 48h sem endividamento | Confia Capital"
            description="Transforme duplicatas e contratos em liquidez através de securitização. Capital liberado em 48h sem impactar o balanço. Operações a partir de R$ 500 mil."
            keywords="securitização de recebíveis, antecipação de duplicatas, cessão fiduciária, capital de giro sem endividamento, securitizadora CVM, liquidez empresarial, transformar recebíveis em dinheiro, duplicatas em capital, contratos em liquidez, securitização Brasil, certificados de recebíveis, CRI CRA, operações estruturadas"
            image="http://confiacapital.com.br/og-securitization.png"
        />
        <SecuritizationHeader />
        <SecuritizationStats />
        <CreditAccess />
        <BusinessCardPromo />
        <OperationSteps />
        <Support />
        <FAQ title="Perguntas frequentes sobre securitização de recebíveis." items={FAQ_DATA} />
        <CTA
            title="Estruture sua operação de securitização hoje mesmo."
            subtitle="Nossa equipe especializada analisa seus recebíveis e apresenta a melhor estrutura em até 48h."
            buttonLabel="Solicitar proposta"
            buttonLink="/solicitar-proposta"
        />
    </div>
)

export default ReceivablesSecuritization
