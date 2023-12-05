'use client'
import styles from './Header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scroll, setScroll] = useState(0)
  const path = usePathname()

  useEffect(() => {
    window.addEventListener('scroll', () =>
      setScroll(window.scrollY || document.documentElement.scrollTop)
    )
  }, [])

  return (
    <div
      className={styles.container}
      style={scroll > 400 ? { backgroundColor: 'rgb(50, 50, 50)' } : {}}
    >
      <div className={styles.link}>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.link}>
        <Link href="https://github.com/earlgrey02" target="_blank">
          GitHub
        </Link>
      </div>
      {path.startsWith('/post') ? (
        <div
          className={styles.title}
          style={scroll > 400 ? { opacity: 1 } : {}}
        >
          {document.querySelector('title')?.textContent}
        </div>
      ) : null}
    </div>
  )
}

export default Header
