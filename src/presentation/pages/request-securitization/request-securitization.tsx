import { type ReactElement } from 'react';

import {
    Meta,
    RequestForm,
    CleanLayout,
} from "src/presentation/components"

const RequestSecuritization = () => (
    <div>
        <Meta
            title="Solicitar Securitização | Confia Capital"
            description="Simule e solicite sua operação de securitização de recebíveis online. Antecipação de duplicatas, contratos e recebíveis com análise rápida. Transforme seus ativos em capital de giro imediato com a Confia Capital, securitizadora autorizada pela CVM."
            keywords="solicitar securitização, simulação securitização, antecipação recebíveis, duplicatas, contratos, capital de giro, CVM autorizada, operação securitização, transformar recebíveis, análise rápida, Confia Capital"
            image="https://confiacapital.com.br/og-request-securitization.png"
        />
        <RequestForm />
    </div>
)

RequestSecuritization.getLayout = (page: ReactElement) => {
    return <CleanLayout>{page}</CleanLayout>
}

export default RequestSecuritization