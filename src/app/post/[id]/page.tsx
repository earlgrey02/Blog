import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import mdxComponents from '@/lib/mdx'
import styles from './Page.module.css'

const Page = ({ params }: { params: { id: number } }) => {
  const post = allPosts.find((post) => post.id == params.id)
  if (!post) notFound()

  const MdxContent = useMDXComponent(post.body.code)

  return (
    <main className={styles.container}>
      <title>{post.title}</title>
      <div className={styles.intro}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.date}>{post.date.substring(0, 10)}</div>
        <hr />
      </div>
      <section className={styles.content}>
        <MdxContent components={mdxComponents(post.id)} />
      </section>
    </main>
  )
}

const generateStaticParams = () =>
  allPosts.map(({ id }) => ({
    id: id.toString()
  }))

export default Page
export { generateStaticParams }
