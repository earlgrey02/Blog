'use client'
import styles from './Page.module.css'
import Post from '@/component/Post/Post'
import MotionedDiv from '@/lib/motion'
import { useEffect, useMemo, useState } from 'react'
import { Variants } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'
import { setIndex } from '@/redux/reducers/pageSlice'
import { getPosts } from '@/modules/post/api'
import Tags from '@/component/Tags/Tags'
import { toPages } from '@/lib/pagination'

const Page = () => {
  const index = useSelector((store: Store) => store.page.index)
  const filter = useSelector((store: Store) => store.filter)
  const [isEnter, setIsEnter] = useState(true)
  const dispatch = useDispatch()

  const pages = useMemo(
    () =>
      toPages(
        filter.tags.length === 0
          ? getPosts()
          : getPosts().filter(
              post =>
                filter.tags.filter(tag => post.tags.includes(tag)).length ===
                filter.tags.length
            )
      ),
    [filter.tags]
  )

  const variants: Variants = useMemo(
    () => ({
      initial: { opacity: 0, y: 10, filter: 'blur(0.5px)' },
      animate: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 1,
          staggerChildren: 0.35,
          delayChildren: isEnter ? 0.5 : 0
        }
      }
    }),
    [isEnter]
  )

  useEffect(() => {
    setIsEnter(false)
  }, [])

  return (
    <div className={styles.container}>
      <MotionedDiv
        className={styles.title}
        initial={{ opacity: 0, filter: 'blur(0.8px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 3 }
        }}>
        Post
      </MotionedDiv>
      <MotionedDiv
        initial={{ opacity: 0, filter: 'blur(0.8px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 2 }
        }}>
        <Tags />
      </MotionedDiv>
      <MotionedDiv
        className={styles.posts}
        variants={variants}
        initial="initial"
        animate="animate"
        key={index}>
        {pages[index]?.map(post => (
          <Post post={post} variants={variants} key={post.id} />
        )) ?? (
          <MotionedDiv
            className={styles.emptyMessage}
            initial={{ opacity: 0, filter: 'blur(0.8px)' }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              transition: { duration: 1 }
            }}>
            일치하는 게시글이 없습니다.
          </MotionedDiv>
        )}
      </MotionedDiv>
      <MotionedDiv
        className={styles.paginator}
        initial={{ opacity: 0, filter: 'blur(0.8px)' }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transition: { duration: 3 }
        }}>
        <Pagination
          count={pages.length}
          page={index + 1}
          onChange={(_, index) => dispatch(setIndex(index - 1))}
        />
      </MotionedDiv>
    </div>
  )
}

export default Page
