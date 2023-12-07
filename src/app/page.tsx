import styles from './Page.module.css'
import Intro from '@/component/Intro/Intro'
import Board from '@/component/Board/Board'
import Footer from '@/component/Footer/Footer'

const Page = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <Board />
      <Footer />
    </div>
  )
}

export default Page
