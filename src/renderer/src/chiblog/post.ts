// This is syncorized with chiblog v1.1.8(20230704)
interface chiblogPost {
  id: number // the post id(unique)
  title: string // the title of this post
  path: string // the path of this post, will be shown at /posts/[path] (unique)
  name: string // the name of this post, English alphabets, numbers and - only.
  time: number // the release time of this post, unix time
  updtime: number // the update time of this post, unix time
  author: string // the author of this post
  content: string // the content of this post, markdown supported. transfer your markdown file into one-row: https://chicdn.cn/mdw/
  china: boolean // china support, if you are in china mainland, you are not allowed to see this article if the china marked false
  comment: boolean // comment support.
  desc: string // the describe of this article, will be shown in the article list and SEO describtion
  category: string // the category of this article, will be shown in the article list
  tags: string[] // the tags of this article, will be shown in the post.
  pinned: boolean // whether you want to pin this article
  banner: string // the banner of this article
}

export { type chiblogPost }
