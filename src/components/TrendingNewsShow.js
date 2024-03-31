import { useState } from 'react';
import '../css/TrendingNewsShow.css';

function TrendingNewsShow({trendingNewsArticle}) {

  const handleClick = () => {
    window.open(trendingNewsArticle.url, '_blank');
  }

  return(
    <div>
      <div className="container">
        <div className="columns-div columns">
          <div onClick={handleClick} className="image-div column is-4">
              <img className='rendered-images' src= {trendingNewsArticle.urlToImage} />
          </div>
          <div onClick={handleClick} className="title-div column is-8">
            {trendingNewsArticle.title}
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default TrendingNewsShow;