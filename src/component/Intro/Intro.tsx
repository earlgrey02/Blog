import MotionedDiv from '@/lib/motion'
import styles from './Intro.module.css'

const Intro = () => {
  return (
    <section className={styles.container}>
      <MotionedDiv
        className={styles.introduction}
        initial={{ opacity: 0, filter: 'blur(0.8px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px) brightness(100%)',
          transition: { duration: 2 }
        }}
      >
        안녕하세요. 제 기술 블로그에 찾아와 주셔서 감사합니다!
        <br />
        저는 백엔드 개발자를 꿈꾸고 있는 대학생 <b>정상윤</b>이라고 합니다.
      </MotionedDiv>
    </section>
  )
}

export default Intro
