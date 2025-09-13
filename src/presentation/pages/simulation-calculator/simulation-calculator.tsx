import {
    Meta,
    Header,
    Stats,
    Products,
    Trust,
    Awards,
    CTA,
    Support,
} from "src/presentation/components"
import CTACards from "src/presentation/components/common/cta-cards/cta-cards"

const SimulationCalculator = () => (
    <div>
        <Meta
            title="Securitizadora | Transforme recebíveis em capital imediato"
            description="R$ 2,8 bilhões movimentados em operações de securitização. Transforme duplicatas e contratos em liquidez em até 48h sem comprometer o balanço."
            keywords="securitização de recebíveis, antecipação de duplicatas, cessão fiduciária, capital de giro sem endividamento, securitizadora autorizada CVM, liquidez empresarial, transformar recebíveis em dinheiro, duplicatas em capital, contratos em liquidez, certificados de recebíveis CRI CRA, operações estruturadas, antecipação de contratos"
            image="https://suasecuritizadora.com/og-home.png"
        />
        <Header />
        <Support />
        <CTACards />
        <CTA />
    </div>
)

export default SimulationCalculator
