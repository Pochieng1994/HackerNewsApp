import MainNewsFeedShow from "./MainNewsFeedShow";

function MainNewsFeed({mainNewsFeedArticles}) {
  


  const renderedTopNewsArticles = mainNewsFeedArticles.map((mainNewsFeedArticle, index) => {
    if(index < 12) {
      return <MainNewsFeedShow key = {mainNewsFeedArticle.title} mainNewsFeedArticle = {mainNewsFeedArticle}/>
    }
  })


  return (
    <div>
      {renderedTopNewsArticles}
    </div>
  )
}

export default MainNewsFeed;