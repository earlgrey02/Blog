import { allPosts } from 'contentlayer/generated'

const getPostById = (id: number) => allPosts.find(post => post.id == id)

export { getPostById }
