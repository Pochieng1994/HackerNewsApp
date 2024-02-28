import '../css/NewsArticleShow.css'

function NewsArticleShow({article}) {
  return(
    <div className='ml-5 mb-5'>
      <div className='ml-5 title is-5 has-text-link'>
        {article.title}
      </div>

      <p className='ml-5'>The Hacker News {'>'} Cybersecurity News</p>

      <div className='container'>
        <div className='columns'>
          <div className='first-column column is-2'>
            <div className='div-3'>
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