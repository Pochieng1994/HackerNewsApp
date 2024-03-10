import '../css/NavBar.css'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


function NavBar({toggleSearchBar}) {
  const handleClick = () => {
    toggleSearchBar();
  }

  return (
    <div>
      <nav className='nav'>
          <ul>
            <li>Home</li>
            <li>Data Breaches</li>
            <li>Cyber Attacks</li>
            <li>Vulnerabilities</li>
            <li>Webinars</li>
            <li>Store</li>
            <li>Contact</li>
            <li><FaSearch onClick = {handleClick} className='icon is-size-5'/></li>
            <li><GiHamburgerMenu className='is-size-5'/></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar;