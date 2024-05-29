'use client'
import { getPosts } from '@/modules/post/api'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTags } from '@/redux/reducers/filterSlice'
import styles from './Tags.module.css'
import { setIndex } from '@/redux/reducers/pageSlice'

const Tags = () => {
  const filter = useSelector((store: Store) => store.filter)
  const dispatch = useDispatch()
  const tags = useMemo(
    () =>
      Array.from(
        new Set(
          getPosts()
            .map(tag => tag.tags)
            .flat()
        )
      ),
    []
  )

  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        {tags.map(tag => {
          const selected = filter.tags.includes(tag)

          return (
            <div
              style={selected ? { backgroundColor: 'rgb(230, 230, 230)' } : {}}
              className={styles.tag}
              key={tag}
              onClick={() => {
                dispatch(
                  setTags(
                    selected
                      ? filter.tags.filter(_tag => _tag !== tag)
                      : [...filter.tags, tag]
                  )
                )
                dispatch(setIndex(0))
              }}>
              {tag}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tags
