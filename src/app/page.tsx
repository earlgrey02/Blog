import styles from './Page.module.css'
import Intro from '@/component/Intro/Intro'
import Board from '@/component/Board/Board'
import Footer from '@/component/Footer/Footer'
import MotionedDiv from '@/lib/motion'

const Page = () => {
  return (
    <div className={styles.container}>
      <Intro />
      <Board />
      <Footer />
      <MotionedDiv
        className={styles.square}
        initial={{
          opacity: 0,
          transform: 'rotate(0deg)'
        }}
        animate={{
          opacity: 1,
          transform: 'rotate(135deg)',
          transition: { duration: 5, ease: [0, 0.8, 0.4, 1.0] }
        }}
      />
    </div>
  )
}

export default Page