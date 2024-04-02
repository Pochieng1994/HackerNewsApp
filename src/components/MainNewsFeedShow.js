import '../css/MainNewsFeedShow.css';

function MainNewsFeedShow({mainNewsFeedArticle}) {
  const handleClick = () => {
    window.open(mainNewsFeedArticle.url, '_blank');
  }


  return(
    <div>

      <div className="container">
        <div className="columns">
          <div onClick={handleClick} className="column">
            <div className='col-1'>
              <img className='main-news-feed-image' src= {mainNewsFeedArticle.urlToImage}/>
            </div>
          </div>
          <div onClick={handleClick} className="col-2 column">
            <div className='main-news-title has-text-weight-bold has-text-black'>
              {mainNewsFeedArticle.title}
            </div>
            <div className='is-size-7 mt-5'>
              {mainNewsFeedArticle.description}
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default MainNewsFeedShow;