'use client'
import NextImage from 'next/image'
import styles from '@/app/post/[id]/Page.module.css'
import { useCallback, useState } from 'react'
import MotionedDiv from './motion'

const Image = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const onLoadingCompleteHandler = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className={styles.image}>
      {isLoading && (
        <MotionedDiv
          className={styles.loading}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="spinner"
        />
      )}
      <NextImage
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        onLoadingComplete={onLoadingCompleteHandler}
      />
    </div>
  )
}

export default Image
