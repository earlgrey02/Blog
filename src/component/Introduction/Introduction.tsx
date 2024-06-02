import styles from './Introduction.module.css'
import MotionedDiv from '@/lib/motion'

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MotionedDiv
          initial={{
            opacity: 0,
            y: 10,
            filter: 'blur(0.8px)'
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 2 }
          }}>
          Hello World!
        </MotionedDiv>
        <MotionedDiv
          initial={{ opacity: 0, y: 10, filter: 'blur(0.8px)' }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 2, delay: 0.5 }
          }}>
          저는 정상윤입니다.
        </MotionedDiv>
      </div>
      <MotionedDiv
        className={styles.description}
        initial={{ opacity: 0, filter: 'blur(0.8px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 2, delay: 1 }
        }}>
        그저 평범한 공대생의 기술 블로그입니다.
      </MotionedDiv>
    </div>
  )
}

export default Introduction
