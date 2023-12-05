import './global.css'
import { ReactNode } from 'react'
import Head from './head'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <Head />
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout