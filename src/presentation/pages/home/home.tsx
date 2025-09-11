import {
    Meta,
    Navbar,
    Header,
    Stats,
    Products,
    Trust,
    Awards,
    CTA,
    Footer,
    Terms
} from "src/presentation/components"

const FAQ_DATA = [
    {
        id: "1",
        question: "Quais opções de financiamento a Bluevine e sua rede de parceiros de empréstimo oferecem?",
        answer: "A Bluevine oferece aos empresários opções de financiamento personalizadas que atendem às suas necessidades específicas. Ao <a href='#'>solicitar uma Linha de Crédito Bluevine</a>, você também será considerado para financiamento em nossa rede de parceiros de empréstimo. Nossos parceiros oferecem uma variedade de opções de financiamento, incluindo empréstimos a prazo com taxas de juros variadas."
    },
    {
        id: "2",
        question: "Como é o processo de solicitação com os parceiros de empréstimo da Bluevine?",
        answer: "O processo é simples e rápido. Você preenche uma única solicitação que é analisada tanto pela Bluevine quanto por nossos parceiros de empréstimo. Recebemos sua documentação, analisamos sua elegibilidade e retornamos com as melhores opções disponíveis em até 24 horas."
    },
    {
        id: "3",
        question: "Como faço os reembolsos se obtiver um empréstimo de um parceiro credor?",
        answer: "Os reembolsos são feitos diretamente ao parceiro credor conforme os termos acordados no contrato. Cada parceiro tem suas próprias condições de pagamento, que serão claramente explicadas antes da aprovação do empréstimo."
    },
    {
        id: "4",
        question: "Solicitar um empréstimo a prazo da rede de parceiros de empréstimo da Bluevine afetará minha pontuação de crédito pessoal?",
        answer: "A consulta inicial não afeta sua pontuação de crédito pessoal. Apenas quando você aceita uma oferta específica é que pode haver uma verificação mais detalhada do crédito, dependendo das políticas do parceiro credor."
    },
    {
        id: "5",
        question: "O que é um empréstimo a prazo?",
        answer: "Um empréstimo a prazo é um tipo de financiamento onde você recebe uma quantia fixa de dinheiro que deve ser paga em parcelas regulares durante um período determinado, geralmente com uma taxa de juros fixa."
    },
    {
        id: "6",
        question: "Qual é a diferença entre um empréstimo a prazo e uma linha de crédito?",
        answer: "Um empréstimo a prazo fornece uma quantia fixa que você paga em parcelas regulares. Uma linha de crédito oferece acesso a fundos até um limite aprovado, que você pode usar conforme necessário e pagar apenas sobre o valor utilizado."
    },
    {
        id: "7",
        question: "A Bluevine oferece empréstimos a prazo?",
        answer: "A Bluevine se especializa em linhas de crédito, mas através de nossa rede de parceiros confiáveis, também oferecemos acesso a empréstimos a prazo com condições competitivas para atender às diversas necessidades de financiamento dos empresários."
    }
];

const Home = () => (
    <div>
        <Meta
            title="IGX – Aumente sua equipe sem aumentar seus custos"
            description="Automatize vendas com inteligência artificial. Sistemas que atendem, qualificam e vendem 24/7 — sem SDRs e sem erro."
            keywords="IA para vendas, automação comercial, agência de IA, chatbot IA, crm com inteligência artificial, inteligência artificial para empresas, automação com IA, funil automatizado, prospecção com IA, inteligência artificial no marketing, sistemas inteligentes de vendas, software de vendas com IA, inteligência artificial Brasil, automação de atendimento, robôs de vendas, vendas sem SDR, chat de vendas automático"
            image="https://igxsolutions.com/og-home.png"
        />
        <Navbar />
        <Header />
        <Stats />
        <Products />
        <Trust />
        <Awards />
        <CTA />
        <Footer />
        <Terms />
        {/* <FAQ items={FAQ_DATA} /> */}
    </div>
)

export default Home
