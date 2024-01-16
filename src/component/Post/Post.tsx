'use client'
import { Post } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
import styles from './Post.module.css'
import MotionedDiv from '@/lib/motion'

const variants = {
  initial: { opacity: 0, y: 10, filter: 'blur(0.5px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, staggerChildren: 0.5, delayChildren: 0.5 }
  }
}

const Post = ({ post }: { post: Post }) => {
  const router = useRouter()

  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/post/${post.id}`)}
    >
      <MotionedDiv className={styles.information} variants={variants}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <div className={styles.tag} key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className={styles.date}>{post.date.substring(0, 10)}</div>
      </MotionedDiv>
    </div>
  )
}

export { variants }
export default Post
