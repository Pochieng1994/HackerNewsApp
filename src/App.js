import { useState } from "react";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import MainNewsFeed from "./components/MainNewsFeed";
import TrendingNews from "./components/TrendingNews";
import SearchResults from "./components/SearchResults";
import NavBar from "./components/NavBar";
import 'bulma/css/bulma.css'
import searchEveryNewsArticle from "./apiRequests/everythingApi";
import searchTopHeadlines from "./apiRequests/topHeadlinesApi";

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

  

  return(
    <div>
      {articles.length > 0 ? null : <MainHeader/>}
      {
        articles.length > 0 ? null : (
          <NavBar toggleSearchBar = {toggleOpenSearchBar}/>
        ) 
      }
      {showSearchBar && <SearchBar onSubmit =  {handleSubmit} />}
      {articles.length > 0 ? null : <MainNewsFeed />}
      {articles.length > 0 ? null: <TrendingNews/>}
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