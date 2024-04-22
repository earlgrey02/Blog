import './global.css'
import styles from './Layout.module.css'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import Head from './head'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'
import ReduxProvider from '@/lib/redux'

interface Props {
  children: ReactNode
}

const metadata: Metadata = {
  title: 'earlgrey02의 블로그',
  description: 'earlgrey02의 기술 블로그입니다.',
  openGraph: {
    title: 'earlgrey02의 기술 블로그',
    description: 'earlgrey02의 기술 블로그입니다.',
    url: 'https://earlgrey02.com',
    type: 'website'
  }
}

const Layout = ({ children }: Props) => {
  return (
    <html>
    <Head />
    <body>
    <div className={styles.container}>
      <Header />
      <ReduxProvider children={children} />
      <Footer />
    </div>
    <Analytics />
    </body>
    </html>
  )
}

export { metadata }
export default Layout
