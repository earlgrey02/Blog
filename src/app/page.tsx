import MotionedDiv from '@/lib/motion'
import styles from './Page.module.css'
import Link from 'next/link'
import { getProfile } from '@/modules/profile/api'
import Introduction from '@/component/Introduction/Introduction'
import { Variants } from 'framer-motion'

const contactVariants: Variants = {
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

const activityVariants: Variants = {
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

const certificationVariants: Variants = {
  initial: { opacity: 0, y: 10, filter: 'blur(0.5px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      delayChildren: 4.5
    }
  }
}

const Page = () => {
  const profile = getProfile()

  return (
    <div className={styles.container}>
      <Introduction />
      <MotionedDiv
        className={styles.contacts}
        variants={contactVariants}
        initial="initial"
        animate="animate">
        {profile.contacts.map(contact => (
          <MotionedDiv
            className={styles.contact}
            variants={contactVariants}
            key={contact.id}>
            <Link href={contact.link} target="_blank">
              {contact.name}
            </Link>
          </MotionedDiv>
        ))}
      </MotionedDiv>
      <div className={styles.spec}>
        <div className={styles.activities}>
          <MotionedDiv
            className={styles.title}
            initial={{ opacity: 0, filter: 'blur(0.8px)' }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              transition: { duration: 2, delay: 2.5 }
            }}>
            Activity
          </MotionedDiv>
          <MotionedDiv
            variants={activityVariants}
            initial="initial"
            animate="animate">
            {profile.activities.map(activity => (
              <MotionedDiv
                className={styles.activity}
                variants={activityVariants}
                key={activity.id}>
                - {activity.name}
              </MotionedDiv>
            ))}
          </MotionedDiv>
        </div>
        <div className={styles.certifications}>
          <MotionedDiv
            className={styles.title}
            initial={{ opacity: 0, filter: 'blur(0.8px)' }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              transition: { duration: 2, delay: 4 }
            }}>
            Certification
          </MotionedDiv>
          <MotionedDiv
            variants={certificationVariants}
            initial="initial"
            animate="animate">
            {profile.certifications.map(certification => (
              <MotionedDiv
                className={styles.certification}
                variants={certificationVariants}
                key={certification.id}>
                - {certification.name}
              </MotionedDiv>
            ))}
          </MotionedDiv>
        </div>
      </div>
    </div>
  )
}

export default Page
