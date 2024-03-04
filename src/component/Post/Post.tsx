'use client'
import { Post } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
import styles from './Post.module.css'
import MotionedDiv from '@/lib/motion'
import { Variants } from 'framer-motion'

const Post = ({ post, variants }: { post: Post; variants: Variants }) => {
  const router = useRouter()

  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/post/${post.id}`)}
      key={post.id}
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

export default Post
