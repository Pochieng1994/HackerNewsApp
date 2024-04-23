import { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import MainNewsFeed from "./components/MainNewsFeed";
import TrendingNews from "./components/TrendingNews";
import SearchResults from "./components/SearchResults";
import NavBar from "./components/NavBar";
import 'bulma/css/bulma.css';
import searchEveryNewsArticle from "./apiRequests/everythingApi";
import './css/App.css';


function App() {

  const [articles, setArticles] = useState([]);
  const [showSearchBar, setSearchBar] = useState(false);
  const [mainNewsFeedArticles, setMainNewsFeedArticles] = useState([]);
  const [trendingNewsArticles, setTrendingNewsArticles] = useState([]);
  
  const handleSubmit = async (term) => {
    const result = await searchEveryNewsArticle(term)

    setArticles(result);
  }



  const toggleOpenSearchBar = () => {
    setSearchBar(!showSearchBar)
  }


  const searchTopHeadlines = async () => {
    const result = await axios.get('https://newsapi.org/v2/everything?q=cybersecurity&apiKey=2fc5cddec8e0423eb7f0a1609f3c7dfe')
    
    setMainNewsFeedArticles(result.data.articles)
  
  };


  const searchTrendingNews = async () => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2fc5cddec8e0423eb7f0a1609f3c7dfe')

    setTrendingNewsArticles(response.data.articles)

  }



  

  useEffect(() => {
    searchTopHeadlines()
    searchTrendingNews()
  },[]);


  

  return(
    <div>
      {articles.length > 0 ? null : <MainHeader/>}
      {
        articles.length > 0 ? null : (
          <NavBar toggleSearchBar = {toggleOpenSearchBar}/>
        ) 
      }
      {showSearchBar && <SearchBar onSubmit =  {handleSubmit} />}

      <div className="container">
        <div className="columns">
          <div className="column is-8">
          {articles.length > 0 ? null : <MainNewsFeed mainNewsFeedArticles ={mainNewsFeedArticles} />}
          </div>
          <div className="second-column column is-4">
            {articles.length > 0 ? null : <div className="horizontal-line-and-trending-title-div">
              <div className="horizontal-line"></div>
              <p className="trending-title has-text-weight-bold is-size-5 has-text-black">Trending News</p>
            </div> }
            {articles.length > 0 ? null: <TrendingNews trendingNewsArticles = {trendingNewsArticles}/>}
          </div>
        </div>
      </div>

      
      
      
      <SearchResults articles = {articles}/>
    </div>
  )
}

export default App;
