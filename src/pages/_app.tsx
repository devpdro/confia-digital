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
        title="América Financeira - Sua Aliada na Jornada Financeira"
        description="A América Financeira oferece soluções personalizadas para suas necessidades financeiras, desde empréstimos consignados até a antecipação de FGTS."
        keywords="empréstimo, consignado, FGTS, antecipação, financeira, bancos, seguros"
      />

      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
