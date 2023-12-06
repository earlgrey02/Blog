import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        ⓒ {new Date().getFullYear()}. earlgrey02. All rights reserved.
      </div>
      <Link
        className={styles.link}
        href="https://github.com/earlgrey02/Blog"
        target="_blank"
      >
        GitHub repository
      </Link>
    </div>
  )
}

export default Footer
