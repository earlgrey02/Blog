import { allPosts } from 'contentlayer/generated'
import styles from './Page.module.css'
import { compareDesc } from 'date-fns'
import Post, { variants } from '@/component/Post/Post'
import MotionedDiv from '@/lib/motion'

const Page = () => {
  const posts = allPosts.sort((post1, post2) =>
    compareDesc(new Date(post1.date), new Date(post2.date))
  )

  return (
    <div className={styles.container}>
      <MotionedDiv
        className={styles.title}
        initial={{ opacity: 0, filter: 'blur(0.8px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 3 }
        }}
      >
        Post
      </MotionedDiv>
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

export default Page
