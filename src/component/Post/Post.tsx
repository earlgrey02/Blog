'use client'
import type { Post } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
import styles from './Post.module.css'
import MotionedDiv from '@/lib/motion'
import { Variants } from 'framer-motion'
import { useSelector } from 'react-redux'

interface Props {
  post: Post
  variants: Variants
}

const Post = ({ post, variants }: Props) => {
  const router = useRouter()
  const tags = useSelector((store: Store) => store.filter.tags)

  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/post/${post.id}`)}>
      <MotionedDiv className={styles.information} variants={variants}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.tags}>
          {post.tags.map(tag => (
            <MotionedDiv
              animate={{
                backgroundColor: tags.includes(tag)
                  ? 'rgb(230, 230, 230)'
                  : 'rgb(240, 240, 240)'
              }}
              transition={{ duration: 0.5 }}
              className={styles.tag}
              key={tag}>
              {tag}
            </MotionedDiv>
          ))}
        </div>
        <div className={styles.date}>{post.date.substring(0, 10)}</div>
      </MotionedDiv>
    </div>
  )
}

export default Post
