import {
    Meta,
    Header,
    CTA,
    Support,
    Benefits,
    CreditAccess,
} from "src/presentation/components"
import CardActivation from "src/presentation/components/common/card-activation/card-activation"
import CreditBenefits from "src/presentation/components/common/credit-benefits/credit-benefits"
import IntranetHeader from "src/presentation/components/common/intranet-header/intranet-header"
import Testimonial from "src/presentation/components/common/testimonial/testimonial"

const Intranet = () => (
    <div>
        <Meta
            title="Securitizadora | Transforme recebíveis em capital imediato"
            description="R$ 2,8 bilhões movimentados em operações de securitização. Transforme duplicatas e contratos em liquidez em até 48h sem comprometer o balanço."
            keywords="securitização de recebíveis, antecipação de duplicatas, cessão fiduciária, capital de giro sem endividamento, securitizadora autorizada CVM, liquidez empresarial, transformar recebíveis em dinheiro, duplicatas em capital, contratos em liquidez, certificados de recebíveis CRI CRA, operações estruturadas, antecipação de contratos"
            image="https://suasecuritizadora.com/og-home.png"
        />
        <IntranetHeader />
        <CreditAccess />
        <Testimonial />
        <Support />
        <CTA />
        <CardActivation />
    </div>
)

export default Intranet
