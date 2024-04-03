import '../css/NavBar.css'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


function NavBar({toggleSearchBar}) {
  const handleClick = () => {
    toggleSearchBar();
  }

  return (
    <div className='nav-div'>
      <nav className='nav'>
          <ul>
            <li className='li-1 has-text-weight-semibold'>Home</li>
            <li className='li-2 has-text-weight-semibold'>Data Breaches</li>
            <li className='li-3 has-text-weight-semibold'>Cyber Attacks</li>
            <li className='li-4 has-text-weight-semibold'>Vulnerabilities</li>
            <li className='li-5 has-text-weight-semibold'>Webinars</li>
            <li className='li-6 has-text-weight-semibold'>Store</li>
            <li className='li-7 has-text-weight-semibold'>Contact</li>
            <li><FaSearch onClick = {handleClick} className='icon is-size-5'/></li>
            <li><GiHamburgerMenu className='is-size-5'/></li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar;