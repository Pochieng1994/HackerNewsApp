import { useState } from "react";
import '../css/SearchBar.css'


function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  } 

  return (
    <div className="div-1">
      <form onSubmit={handleFormSubmit}>
        <input className="input-field" value = {term} onChange = {handleChange} placeholder="Search Here..."/>
      </form>
    </div>
  )
}

export default SearchBar;
