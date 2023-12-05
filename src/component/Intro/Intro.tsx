import styles from './Intro.module.css'
import MotionedDiv from '@/lib/motion'

const variants = {
  exit: { opacity: 0, filter: 'blur(0.8px) brightness(80%)' },
  enter: {
    opacity: 1,
    filter: 'blur(0px) brightness(100%)',
    transition: { duration: 2.5, staggerChildren: 0.6 }
  }
}

const Intro = () => {
  return (
    <div className={styles.container}>
      <MotionedDiv
        className={styles.intro}
        initial="exit"
        animate="enter"
        variants={variants}
      >
        <MotionedDiv className={styles.title} variants={variants}>
          earlgrey02&apos;s blog
        </MotionedDiv>
        <MotionedDiv className={styles.description} variants={variants}>
          Backend를 공부하는 개발 블로그입니다.
        </MotionedDiv>
        <MotionedDiv className={styles.tags} variants={variants}>
          #Kotlin #Spring #Kubernetes
        </MotionedDiv>
      </MotionedDiv>
    </div>
  )
}

export default Intro