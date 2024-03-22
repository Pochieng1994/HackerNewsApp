import TrendingNewsShow from "./TrendingNewsShow";

function TrendingNews({trendingNewsArticles}) {

  const renderedTrendingNewsArticles = trendingNewsArticles.map((trendingNewsArticle, index) => {
    if(index < 7) {
      return <TrendingNewsShow trendingNewsArticle={trendingNewsArticle}/>
    }
  })

  return (
    <div>
      {renderedTrendingNewsArticles}
    </div>
  )
}

export default TrendingNews;