import NewsArticleShow from "./NewsArticleShow";

function SearchResults({articles}) {

  const renderedNewsArticles = articles.map((article) => {
    return <NewsArticleShow key={article.title} article = {article}/>
  })

  return (
    <div>
      {renderedNewsArticles}
    </div>
  )
}

export default SearchResults;