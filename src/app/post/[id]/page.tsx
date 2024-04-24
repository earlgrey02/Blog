import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import mdxComponents from '@/lib/mdx'
import styles from './Page.module.css'
import { getPostById } from '@/modules/post/api'
import { Metadata } from 'next'

interface Props {
  params: { id: number }
}

const Page = ({ params }: Props) => {
  const post = getPostById(params.id)
  if (!post) notFound()

  const MdxContent = useMDXComponent(post.body.code)

  return (
    <main className={styles.container}>
      <header className={styles.intro}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.date}>{post.date.substring(0, 10)}</div>
      </header>
      <section className={styles.content}>
        <MdxContent components={mdxComponents(post.id)} />
      </section>
    </main>
  )
}

const generateStaticParams = async () =>
  allPosts.map(post => ({ id: post.id.toString() }))

const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const post = getPostById(params.id)
  if (!post) notFound()

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article'
    },
    keywords: post.tags
  }
}

export { generateStaticParams, generateMetadata }
export default Page
