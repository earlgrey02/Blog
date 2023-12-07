import styles from './Board.module.css'
import MotionedDiv from '@/lib/motion'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Post from '../Post/Post'

const variants = {
  initial: { opacity: 0, filter: 'blur(0.2px)' },
  animate: {
    opacity: 1,
    filter: 'blur(0px) brightness(100%)',
    transition: { duration: 2, staggerChildren: 0.5, delayChildren: 0.8 }
  }
}

const Board = async () => {
  const posts = allPosts.sort((post1, post2) =>
    compareDesc(new Date(post1.date), new Date(post2.date))
  )

  return (
    <div className={styles.container}>
      <MotionedDiv
        className={styles.posts}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </MotionedDiv>
    </div>
  )
}

export default Board
export { variants }
