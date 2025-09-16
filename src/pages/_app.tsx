import { type NextPage } from 'next'
import type { AppProps } from 'next/app'
import { type ReactElement, type ReactNode } from 'react'

import { DefaultLayout, Meta } from 'src/presentation/components'

import "src/presentation/styles/globals.css";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <>
      <Meta
        title="Transforme recebíveis em capital imediato | Confia Capital"
        description="Securitização de recebíveis com liquidação em até 48h. Operações estruturadas que transformam duplicatas e contratos em capital sem impactar o balanço."
        keywords="securitização de recebíveis, antecipação de duplicatas, cessão fiduciária, capital de giro, securitizadora CVM, liquidez empresarial, certificados de recebíveis, CRI CRA, operações estruturadas, transformar recebíveis em dinheiro"
      />
      
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
