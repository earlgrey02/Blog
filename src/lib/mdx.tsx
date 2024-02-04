import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import Image from './image'

const mdxComponents = (id: number): MDXComponents => ({
  p: ({ children }) => <span>{children}</span>,
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  img: ({ src, alt }) => (
    <Image src={`/posts/${id}/${src}`} alt={alt as string} />
  )
})

export default mdxComponents
