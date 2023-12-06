import styles from './Board.module.css'
import Post from '../Post/Post'
import { getPostsSortedByDate } from '@/modules/post/api'
import MotionedDiv from '@/lib/motion'

const variants = {
  initial: { opacity: 0, filter: 'blur(0.2px)' },
  animate: {
    opacity: 1,
    filter: 'blur(0px) brightness(100%)',
    transition: { duration: 2, staggerChildren: 0.5, delayChildren: 0.8 }
  }
}

const Board = async () => {
  const posts = await getPostsSortedByDate()

  return (
    <div className={styles.container}>
      <MotionedDiv
        className={styles.posts}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        {posts.map((post) => (
          <>
            <Post post={post} key={post.id} />
          </>
        ))}
      </MotionedDiv>
    </div>
  )
}

export default Board
export { variants }
