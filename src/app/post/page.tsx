'use client'
import { allPosts } from 'contentlayer/generated'
import styles from './Page.module.css'
import { compareDesc } from 'date-fns'
import Post from '@/component/Post/Post'
import MotionedDiv from '@/lib/motion'
import { useEffect, useMemo, useState } from 'react'
import { Variants } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'
import { setPage } from '@/redux/reducers/pageSlice'

const Page = () => {
  const page = useSelector((store: Store) => store.page)
  const [isEnter, setIsEnter] = useState(true)
  const dispatch = useDispatch()

  const pages = useMemo(
    () =>
      allPosts
        .sort((post1, post2) =>
          compareDesc(new Date(post1.date), new Date(post2.date))
        )
        .reduce<Post[][]>((pages, post, index) => {
          const page = Math.floor(index / 4)

          if (!pages[page]) pages[page] = []
          pages[page].push(post)

          return pages
        }, []),
    []
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
        className={styles.posts}
        variants={variants}
        initial="initial"
        animate="animate"
        key={page}>
        {pages[page].map(post => (
          <Post post={post} variants={variants} key={post.id} />
        ))}
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
          page={page + 1}
          onChange={(_, index) => dispatch(setPage(index - 1))}
        />
      </MotionedDiv>
    </div>
  )
}

export default Page
