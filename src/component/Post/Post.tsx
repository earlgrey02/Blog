import Tag from '../Tag/Tag'
import styles from './Post.module.css'
import Link from 'next/link'

const Post = ({ post }: { post: Post }) => {
  return (
    <Link href={`/post/${post.id}`} className={styles.container}>
      <div className={styles.information}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <div className={styles.date}>{post.date}</div>
      </div>
    </Link>
  )
}

export default Post