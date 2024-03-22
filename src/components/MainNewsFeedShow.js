import '../css/MainNewsFeedShow.css';

function MainNewsFeedShow({mainNewsFeedArticle}) {
  return(
    <div>

      <div className="container">
        <div className="columns">
          <div className="column">
            <div className='col-1'>
              <img src= {mainNewsFeedArticle.urlToImage}/>
            </div>
          </div>
          <div className="col-2 column">
            <div>
              {mainNewsFeedArticle.title}
            </div>
            <div>
              {mainNewsFeedArticle.description}
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default MainNewsFeedShow;