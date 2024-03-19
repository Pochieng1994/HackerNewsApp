import MainNewsFeedShow from "./MainNewsFeedShow";

function MainNewsFeed({topNewsArticles}) {
  
  const renderedTopNewsArticles = topNewsArticles.map((topNewsArticle) => {
    return <MainNewsFeedShow key = {topNewsArticle.title} topNewsArticle = {topNewsArticle}/>
  })


  return (
    <div>
      {renderedTopNewsArticles}
    </div>
  )
}

export default MainNewsFeed;