import type { MDXComponents } from 'mdx/types'
import NextLink from 'next/link'
import Image from './Image'
import { Link, Text } from '@chakra-ui/react'

const mdxComponents = (id: number): MDXComponents => ({
  p: ({ children }) => (
    <Text
      as="span"
      fontSize={{
        base: '0.8rem',
        sm: '0.9rem'
      }}
      lineHeight={2}
      wordBreak="break-word"
      children={children}
    />
  ),
  h1: ({ children }) => (
    <Text
      as="h1"
      marginTop="1.2rem"
      marginBottom="0.4rem"
      fontSize="1.3rem"
      fontWeight={600}
      children={children}
    />
  ),
  h2: ({ children }) => (
    <Text
      as="h2"
      marginTop="1.2rem"
      marginBottom="0.4rem"
      fontSize="1.1rem"
      fontWeight={600}
      children={children}
    />
  ),
  a: ({ href, children }) => (
    <Link as={NextLink} href={href as string} children={children} />
  ),
  img: ({ src, alt }) => (
    <Image src={`/posts/${id}/${src}`} alt={alt as string} />
  )
})

export default mdxComponents
