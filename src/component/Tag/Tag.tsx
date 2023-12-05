'use client'
import styles from './Tag.module.css'
import { useRouter } from 'next/navigation'

const Tag = ({ tag }: { tag: string }) => {
  const router = useRouter()

  return (
    <div
      className={styles.tag}
      onClick={(e) => {
        e.preventDefault()
        router.push(`/tag/${tag.toLowerCase()}`)
      }}
    >
      {tag}
    </div>
  )
}

export default Tag
