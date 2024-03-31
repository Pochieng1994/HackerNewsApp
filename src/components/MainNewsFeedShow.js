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
            <div className='has-text-weight-bold has-text-black'>
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