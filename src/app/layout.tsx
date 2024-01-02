import './global.css'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Head from './head'
import Header from '@/component/Header/Header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export default Layout
