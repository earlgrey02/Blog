import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        ⓒ {new Date().getFullYear()}. earlgrey02. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
