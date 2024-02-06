import MainHeader from "./components/MainHeader";
import SearchBar from "./components/SearchBar";
import MainNewsFeed from "./components/MainNewsFeed";
import TrendingNews from "./components/TrendingNews";
import 'bulma/css/bulma.css'

function App() {
  return(
    <div>
      <MainHeader/>
      <SearchBar/>
      <MainNewsFeed/>
      <TrendingNews/>
    </div>
  )
}

export default App;