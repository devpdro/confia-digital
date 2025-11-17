import { type ReactNode } from 'react'
import { useRouter } from 'next/router'

import { Navbar, Footer, Terms } from 'src/presentation/components'

import { IconBrandWhatsapp } from '@tabler/icons-react'

import S from './default.module.scss'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const router = useRouter()
  const isHotInvest = router.pathname.startsWith('/hot-invest') || router.asPath?.includes('/hot-invest')

  return (
    <div>
      <Navbar />
      <main>{children}</main>

      <a
        href="https://api.whatsapp.com/send?phone=5519981062535&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Confia%20Digital!"
        target="_blank"
        rel="noopener noreferrer"
        className={S['whatsapp-button']}
      >
        <IconBrandWhatsapp className={S.icon} />
      </a>

      {isHotInvest ? (
        <>
          <Footer themeColor="#16487E" />
          <Terms themeColor="#16487E" />
        </>
      ) : (
        <>
          <Footer />
          <Terms />
        </>
      )}
    </div>
  )
}

export default DefaultLayout
