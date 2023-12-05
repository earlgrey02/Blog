import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const path = join(process.cwd(), '/public/posts')
const files = fs.readdirSync(path)

const getPosts = async () =>
  await Promise.all(
    files.map((name) => getPostById(Number(name.replace('.md', ''))))
  )

const getPostsSortedByDate = async () =>
  (await getPosts()).sort(
    (post1, post2) =>
      new Date(post2.date.replace(/\./g, '/')).getTime() -
      new Date(post1.date.replace(/\./g, '/')).getTime()
  )

const getPostById = async (id: number) => {
  const file = fs.readFileSync(join(path, `${id}.md`), 'utf8')
  const { data, content } = matter(file)
  const post: Post = {
    id: id,
    title: data.title,
    description: data.description,
    content: (await remark().use(html).process(content)).toString(),
    date: data.date,
    tags: data.tags.split(',')
  }

  return post
}

export { getPosts, getPostsSortedByDate, getPostById }