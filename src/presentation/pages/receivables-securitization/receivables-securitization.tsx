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
        question: "O que é antecipação de recebíveis e como funciona?",
        answer: "Antecipação é a transformação dos seus recebíveis (duplicatas, contratos, notas fiscais) em capital disponível imediatamente. Você recebe o valor à vista e nós aguardamos o vencimento dos títulos dos seus clientes."
    },
    {
        id: "2",
        question: "Qual o valor mínimo para uma operação de antecipação?",
        answer: "Operamos com valores a partir de R$ 500 mil em recebíveis. Para operações menores, recomendamos nossa <a href='#'>solução de Antecipação de Contratos</a> que tem requisitos mais flexíveis."
    },
    {
        id: "3",
        question: "Antecipação conta como endividamento no meu balanço?",
        answer: "Não. A antecipação é uma operação de cessão de ativos, não de endividamento. Isso preserva sua capacidade de crédito e não impacta os indicadores financeiros da empresa junto a bancos e fornecedores."
    },
    {
        id: "4",
        question: "Quais tipos de recebíveis podem ser antecipados?",
        answer: "Antecipamos duplicatas comerciais, contratos de prestação de serviços, mensalidades educacionais, aluguéis e recebíveis do agronegócio. O importante é ter sacados com bom histórico de pagamento e dispersão adequada da carteira."
    },
    {
        id: "5",
        question: "Quanto tempo leva para liberar os recursos?",
        answer: "O processo completo leva entre 48h e 72h úteis: 24h para análise dos recebíveis, 24h para estruturação jurídica e até 24h adicionais para liberação após assinatura dos contratos."
    },
    {
        id: "6",
        question: "Como é calculada a taxa de antecipação?",
        answer: "A taxa é baseada na qualidade dos seus sacados, prazo médio dos recebíveis, dispersão da carteira e histórico de inadimplência. Fazemos rating interno de cada pagador para precificar adequadamente o risco."
    },
    {
        id: "7",
        question: "O que acontece se meu cliente não pagar o recebível antecipado?",
        answer: "Em caso de inadimplência, nossa equipe de cobrança atua na recuperação através de métodos extrajudiciais e judiciais. O risco é assumido por nós, não retornando para sua empresa após a cessão fiduciária."
    }
];

const ReceivablesSecuritization = () => (
    <div>
        <Meta
            title="Antecipação de Recebíveis com capital em até 48h sem endividamento | Confia Capital"
            description="Transforme duplicatas e contratos em liquidez através de antecipação. Capital liberado em 48h sem impactar o balanço. Operações a partir de R$ 500 mil."
            keywords="antecipação de recebíveis, antecipação de duplicatas, cessão fiduciária, capital de giro sem endividamento, securitizadora CVM, liquidez empresarial, transformar recebíveis em dinheiro, duplicatas em capital, contratos em liquidez, antecipação Brasil, certificados de recebíveis, CRI CRA, operações estruturadas"
            image="http://confiacapital.com.br/og-securitization.png"
        />
        <SecuritizationHeader />
        <SecuritizationStats />
        <CreditAccess />
        <BusinessCardPromo />
        <OperationSteps />
        <Support />
        <FAQ title="Perguntas frequentes sobre antecipação de recebíveis." items={FAQ_DATA} />
        <CTA
            title="Estruture sua operação de antecipação hoje mesmo."
            subtitle="Nossa equipe especializada analisa seus recebíveis e apresenta a melhor estrutura em até 48h."
            buttonLabel="Solicitar proposta"
            buttonLink="/solicitar-proposta"
        />
    </div>
)

export default ReceivablesSecuritization
