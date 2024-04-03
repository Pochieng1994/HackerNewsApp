import { useState, useEffect } from "react";
import axios from "axios";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import MainNewsFeed from "./components/MainNewsFeed";
import TrendingNews from "./components/TrendingNews";
import SearchResults from "./components/SearchResults";
import NavBar from "./components/NavBar";
import 'bulma/css/bulma.css'
import searchEveryNewsArticle from "./apiRequests/everythingApi";
import './css/App.css'


function App() {

  const [articles, setArticles] = useState([]);
  
  const handleSubmit = async (term) => {
    const result = await searchEveryNewsArticle(term)

    setArticles(result);
  }



  const [showSearchBar, setSearchBar] = useState(false);
  
  const toggleOpenSearchBar = () => {
    setSearchBar(!showSearchBar)
  }



  const [mainNewsFeedArticles, setMainNewsFeedArticles] = useState([]);

  const searchTopHeadlines = async () => {
    const result = await axios.get('https://newsapi.org/v2/everything?q=cybersecurity&apiKey=2fc5cddec8e0423eb7f0a1609f3c7dfe')
    
    setMainNewsFeedArticles(result.data.articles)
  
  };


  const [trendingNewsArticles, setTrendingNewsArticles] = useState([]);

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
          <div className="horizontal-line-and-trending-title-div">
              <div className="horizontal-line"></div>
              <p className="trending-title has-text-weight-bold is-size-5 has-text-black">Trending News</p>
            </div>
          {articles.length > 0 ? null: <TrendingNews trendingNewsArticles = {trendingNewsArticles}/>}
          </div>
        </div>
      </div>

      
      
      
      <SearchResults articles = {articles}/>
    </div>
  )
}

export default App;

/*Inorder to pass information from the child component to the parent 
component we have to create an event handler in the Parent component and 
pass that event handler down using the prop system to the child component.
Once the event handler was passed to the child component. I created an event
handler to watch for when a user submits the form element. Inside the form submit
event handler I called the event handler that was passed down from the parent 
component and passed in the search term that the user pleases look for.

Communicating the Search Results which is an array of objects from the 
Parent component down to the Search Results component -->
We are going to combine the State System and the props system because after 
doing a search we want to update the content on the screen with a new list of 
news articles  */