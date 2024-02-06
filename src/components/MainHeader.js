import NavBar from './NavBar';
import '../css/MainHeader.css';

function MainHeader() {
  return(
    <div>
      <div className="container-fluid" >
        <div className="notification is-link">
          <h1 className="is-size-1 has-text-weight-bold">The Hacker News</h1>
        </div>
      </div>

      <div>
        <NavBar/>
      </div>
    </div>
  )
}

export default MainHeader;

//Importing CSS library using NPM, import the CSS file
//Use a command line tool to install Bulma into our project