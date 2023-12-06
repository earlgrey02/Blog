import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'

const directoryPath = join(process.cwd(), '/public/posts')
const files = fs.readdirSync(directoryPath)

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
  const filePath = join(directoryPath, `${id}.md`)

  try {
    fs.readFileSync(filePath, 'utf8')
  } catch {
    notFound()
  }

  const file = fs.readFileSync(filePath, 'utf8')
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

export { getPostsSortedByDate, getPostById }
