import styles from './Board.module.css'
import Post from '../Post/Post'
import { getPostsSortedByDate } from '@/modules/post/api'

const Board = async () => {
  const posts = await getPostsSortedByDate()

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default Board