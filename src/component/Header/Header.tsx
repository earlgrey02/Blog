import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>
        <Link href='/'>earlgrey02</Link>
      </h1>
      <ul className={styles.links}>
        <li>
          <Link href='/'>home</Link>
        </li>
        <li>
          <Link href='/post'>post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
