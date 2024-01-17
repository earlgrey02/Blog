import MotionedDiv from '@/lib/motion'
import styles from './Page.module.css'
import Link from 'next/link'

const linkVariants = {
  initial: { opacity: 0, filter: 'blur(0.5px)' },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 1.5
    }
  }
}

const activityVariants = {
  initial: { opacity: 0, y: 10, filter: 'blur(0.5px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 3
    }
  }
}

const Page = () => {
  return (
    <div className={styles.container}>
      <Introduction />
      <Links />
      <Activities />
    </div>
  )
}

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.header}>
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
          }}
        >
          Hello World!
        </MotionedDiv>
        <MotionedDiv
          initial={{ opacity: 0, y: 10, filter: 'blur(0.8px)' }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 2, delay: 0.5 }
          }}
        >
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
        }}
      >
        가치있는 서비스를 개발하기 위해 기술을 공부합니다.
      </MotionedDiv>
    </div>
  )
}

const Links = () => {
  return (
    <MotionedDiv
      className={styles.links}
      variants={linkVariants}
      initial="initial"
      animate="animate"
    >
      <MotionedDiv className={styles.link} variants={linkVariants}>
        <Link href="https://github.com/earlgrey02" target="_blank">
          GitHub
        </Link>
      </MotionedDiv>
      <MotionedDiv className={styles.link} variants={linkVariants}>
        <Link href="https://www.earlgrey02.com" target="_blank">
          Blog
        </Link>
      </MotionedDiv>
      <MotionedDiv className={styles.link} variants={linkVariants}>
        <Link href="https://www.instagram.com/earlgrey_ee" target="_blank">
          Instagram
        </Link>
      </MotionedDiv>
    </MotionedDiv>
  )
}

const Activities = () => {
  return (
    <div className={styles.activities}>
      <MotionedDiv
        className={styles.header}
        initial={{ opacity: 0, filter: 'blur(0.8px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 2, delay: 2.5 }
        }}
      >
        Activites
      </MotionedDiv>
      <MotionedDiv
        variants={activityVariants}
        initial="initial"
        animate="animate"
      >
        <MotionedDiv className={styles.activity} variants={activityVariants}>
          - SW 마에스트로 14기
        </MotionedDiv>
        <MotionedDiv className={styles.activity} variants={activityVariants}>
          - 삼육대학교 멋쟁이 사자처럼 10기 운영진
        </MotionedDiv>
      </MotionedDiv>
    </div>
  )
}

export default Page
