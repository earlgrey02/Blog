import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import MotionedDiv from '@/lib/motion'
import { variants } from '../Board/Board'
import styles from './Post.module.css'
import Tag from '../Tag/Tag'

const Post = ({ post }: { post: Post }) => {
  return (
    <Link href={`/post/${post.id}`} className={styles.container}>
      <MotionedDiv className={styles.information} variants={variants}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <div className={styles.date}>{post.date.substring(0, 10)}</div>
        <div className={styles.line} />
      </MotionedDiv>
    </Link>
  )
}

export default Post
