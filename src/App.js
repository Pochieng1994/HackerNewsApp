import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import MainNewsFeed from "./components/MainNewsFeed";
import TrendingNews from "./components/TrendingNews";
import 'bulma/css/bulma.css'

function App() {

  const handleSubmit = (term) => {
    console.log('Do a Search with ', term);
  }

  return(
    <div>
      <MainHeader/>
      <SearchBar onSubmit = {handleSubmit}/>
      <MainNewsFeed/>
      <TrendingNews/>
    </div>
  )
}

export default App;