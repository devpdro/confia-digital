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
            image="http://confiacapital.com.br/og-home.png"
        />
        <Header />
        <Stats />
        <Products />
        <Trust />
        <Awards />
        <CTA 
            title="Transforme seus recebíveis em capital hoje mesmo."
            subtitle="Nossa equipe especializada analisa suas necessidades e apresenta a melhor solução financeira em até 24h."
            buttonLabel="Solicitar proposta"
            buttonLink="/solicitar-proposta"
        />
    </div>
)

export default Home
