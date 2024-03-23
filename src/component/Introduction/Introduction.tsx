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
        가치있는 서비스를 개발하기 위해 기술을 공부합니다.
      </MotionedDiv>
    </div>
  )
}

export default Introduction
