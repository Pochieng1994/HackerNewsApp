import '../css/NewsArticleShow.css';

function NewsArticleShow({article}) {
  
  const handleClick = () => {
    window.open(article.url, '_blank');
  }

  return(
    <div className='main-div ml-5'>

      <div onClick = {handleClick} className='article-title ml-5 title is-5 has-text-link'>
        {article.title}
      </div>

      <p className='hacker-news ml-5'>The Hacker News {'>'} Cybersecurity News</p>

      <div className='container'>
        <div className='columns'>
          <div className='first-column column is-2'>
            <div onClick={handleClick} className='div-3'>
              <img src={article.urlToImage}/>
            </div>
          </div>

          <div className='column is-10'>
            <div>
              {article.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsArticleShow;