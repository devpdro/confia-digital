import {
    Meta,
    Header,
    Stats,
    Products,
    Trust,
    Awards,
    CTA,
} from "src/presentation/components"

const Home = () => (
    <div>
        <Meta
            title="Transforme recebíveis em capital imediato | Confia Capital"
            description="R$ 2,8 bilhões movimentados em operações de securitização. Transforme duplicatas e contratos em liquidez em até 48h sem comprometer o balanço."
            keywords="securitização de recebíveis, antecipação de duplicatas, cessão fiduciária, capital de giro sem endividamento, securitizadora autorizada CVM, liquidez empresarial, transformar recebíveis em dinheiro, duplicatas em capital, contratos em liquidez, certificados de recebíveis CRI CRA, operações estruturadas, antecipação de contratos"
            image="https://suasecuritizadora.com/og-home.png"
        />
        <Header />
        <Stats />
        <Products />
        <Trust />
        <Awards />
        <CTA />
    </div>
)

export default Home
