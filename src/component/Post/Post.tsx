import MotionedDiv from '@/lib/motion'
import Tag from '../Tag/Tag'
import styles from './Post.module.css'
import Link from 'next/link'
import { variants } from '../Board/Board'

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
        <div className={styles.date}>{post.date}</div>
        <div className={styles.line} />
      </MotionedDiv>
    </Link>
  )
}

export default Post
