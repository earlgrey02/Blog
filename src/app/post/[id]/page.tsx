import styles from './Page.module.css'
import { getPostById } from '@/modules/post/api'

const Page = async ({ params }: { params: { id: number } }) => {
  const post = await getPostById(params.id)

  return (
    <main className={styles.container}>
      <title>{post.title}</title>
      <div className={styles.intro}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.description}>{post.description}</div>
        <div className={styles.date}>{post.date}</div>
        <hr />
      </div>
      <section
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  )
}

export default Page
