import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData, displayClass }: QuartzComponentProps) {
  if (fileData.slug === "index") {
    return <></>
  }
  const title = fileData.frontmatter?.title;

  if (title) {
    return <h1 class={`article-title ${displayClass ?? ""}`}>{title}</h1>
  } else {
    return null
  }
}
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
