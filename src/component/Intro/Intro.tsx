import styles from './Intro.module.css'
import MotionedDiv from '@/lib/motion'

const variants = {
  initial: { opacity: 0, filter: 'blur(0.8px) brightness(80%)' },
  animate: {
    opacity: 1,
    filter: 'blur(0px) brightness(100%)',
    transition: { duration: 2.5, staggerChildren: 0.5 }
  }
}

const Intro = () => {
  return (
    <div className={styles.container}>
      <MotionedDiv
        className={styles.intro}
        initial="initial"
        animate="animate"
        variants={variants}
      >
        <MotionedDiv className={styles.title} variants={variants}>
          earlgrey02&apos;s blog
        </MotionedDiv>
        <MotionedDiv className={styles.description} variants={variants}>
          DevOps를 공부하는 기술 블로그입니다.
        </MotionedDiv>
        <MotionedDiv className={styles.tags} variants={variants}>
          #Kubernetes #Kotlin #Spring
        </MotionedDiv>
      </MotionedDiv>
      <MotionedDiv
        className={styles.square}
        initial={{
          opacity: 0,
          transform: 'rotate(0deg)'
        }}
        animate={{
          opacity: 1,
          transform: 'rotate(135deg)',
          transition: { duration: 3, ease: [0, 0.8, 0.4, 1.0] }
        }}
      />
    </div>
  )
}

export default Intro
