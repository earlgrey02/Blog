import './global.css'
import { ReactNode } from 'react'
import Head from './head'
import Header from '@/component/Header/Header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout
