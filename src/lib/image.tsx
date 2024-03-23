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
          transition={{ duration: 0.5 }}
          key="spinner"
        />
      )}
      <NextImage
        src={src}
        alt={alt}
        width={570}
        height={850}
        objectFit="contain"
        onLoadingComplete={onLoadingCompleteHandler}
        style={{ height: 'auto', maxWidth: '100%' }}
      />
    </div>
  )
}

export default Image
