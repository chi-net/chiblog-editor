interface chiblogPage {
  id: number // the id of page(unique)
  type: string // the type of page. if this is a link, it will jump to another url.
  title: string // the title of this page
}

interface chiblogPageLink extends chiblogPage {
  url: string // the url you want to jump
  // type is link has them
  name: string // the name(path) of this page, url will be shown as /[name] (unique)
  target: string // <a target="[target]"/>
}

interface chiblogPageArticle extends chiblogPage {
  // if it is a article
  content: string // the content of this page, markdown supported.
  comment: string // pages supported comment only article supported.
}

export { type chiblogPageLink, type chiblogPageArticle }
