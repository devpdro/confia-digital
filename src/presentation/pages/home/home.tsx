import {
    Meta,
    Header,
    Stats,
    Products,
    Trust,
    Awards,
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
        question: "Antecipação conta como endividamento no meu balanço?",
        answer: "Não. A antecipação é uma operação de cessão de ativos, não de endividamento. Isso preserva sua capacidade de crédito e não impacta os indicadores financeiros da empresa junto a bancos e fornecedores."
    },
    {
        id: "3",
        question: "Quanto tempo leva para liberar os recursos?",
        answer: "O processo completo leva entre 48h e 72h úteis: 24h para análise dos recebíveis, 24h para estruturação jurídica e até 24h adicionais para liberação após assinatura dos contratos."
    },
    {
        id: "4",
        question: "Qual o valor mínimo para uma operação de antecipação?",
        answer: "Para operações menores, recomendamos nossa <a href='/antecipacao-de-contratos'>solução de Antecipação de Contratos</a> que tem requisitos mais flexíveis."
    },
    {
        id: "5",
        question: "Como é calculada a taxa de antecipação?",
        answer: "A taxa é baseada na qualidade dos seus sacados, prazo médio dos recebíveis, dispersão da carteira e histórico de inadimplência. Fazemos rating interno de cada pagador para precificar adequadamente o risco."
    }
];

const Home = () => (
    <div>
        <Meta
            title="Transforme recebíveis em capital imediato | Confia Capital"
            description="R$ 2,8 bilhões movimentados em operações de securitização. Transforme duplicatas e contratos em liquidez em até 48h sem comprometer o balanço."
            keywords="securitização de recebíveis, antecipação de duplicatas, cessão fiduciária, capital de giro sem endividamento, securitizadora autorizada CVM, liquidez empresarial, transformar recebíveis em dinheiro, duplicatas em capital, contratos em liquidez, certificados de recebíveis CRI CRA, operações estruturadas, antecipação de contratos"
            image="http://confiacapital.com.br/og-home.png"
        />
        <Header />
        <Stats />
        <Products />
        <Trust />
        <Awards />
        <FAQ
            title="Perguntas frequentes sobre antecipação de recebíveis."
            items={FAQ_DATA}
        />
        <CTA
            title="Transforme seus recebíveis em capital hoje mesmo."
            subtitle="Nossa equipe especializada analisa suas necessidades e apresenta a melhor solução financeira em até 24h."
            buttonLabel="Solicitar proposta"
            buttonLink="/solicitar-proposta"
        />
    </div>
)

export default Home
