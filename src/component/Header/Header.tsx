'use client'
import styles from './Header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
  const [scroll, setScroll] = useState(0)
  const [title, setTitle] = useState('')
  const path = usePathname()

  useEffect(() => {
    window.addEventListener('scroll', () =>
      setScroll(window.scrollY || document.documentElement.scrollTop)
    )
  }, [])

  useEffect(() => {
    if (path.startsWith('/post')) {
      setTitle(document.querySelector('title')?.textContent as string)
    }
  }, [path])

  return (
    <div
      className={styles.container}
      style={scroll > 300 ? { backgroundColor: 'rgb(50, 50, 50)' } : {}}
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
          style={scroll > 300 ? { opacity: 1 } : {}}
        >
          {title}
        </div>
      ) : null}
    </div>
  )
}

export default Header
