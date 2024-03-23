import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkBreaks from 'remark-breaks'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    date: {
      type: 'date',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/posts/${post._raw.flattenedPath}`
    },
    id: {
      type: 'number',
      resolve: doc => Number(doc._raw.sourceFileName.replace('.mdx', ''))
    }
  }
}))

const source = makeSource({
  contentDirPath: 'public/posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkBreaks],
    rehypePlugins: [
      [
        rehypePrettyCode as any,
        {
          theme: 'material-theme-darker',
          keepBackground: true
        }
      ]
    ]
  }
})

export default source
export { Post }
