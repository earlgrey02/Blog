import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/post/[id]/Page.module.css'

const mdxComponents = (id: number): MDXComponents => ({
  p: ({ children }) => <div>{children}</div>,
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  img: ({ src, alt }) => (
    <div className={styles.image}>
      <Image
        src={`/posts/${id}/${src}`}
        alt={alt as string}
        layout="fill"
        objectFit="contain"
      />
    </div>
  )
})

export default mdxComponents
