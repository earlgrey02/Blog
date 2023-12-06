import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        ⓒ {new Date().getFullYear()}. earlgrey02. All rights reserved.
      </div>
      <div className={styles.powered}>
        Powered by
        <div className={styles.image}>
          <Link href="https://nextjs.org" target="_blank">
            <Image src="/images/nextjs.png" fill alt="nextjs" />
          </Link>
        </div>
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
