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
  } /*this is going to be called whenever a user changes the text input
  in anyway, w.e the user changes the text input in anyway the state
  system will be updated*/

  return (
    <div className="div-1">
      <form onSubmit={handleFormSubmit}>
        <input className="input-field" value = {term} onChange = {handleChange} placeholder="Search Here..."/>
      </form>
    </div>
  )
}

export default SearchBar;

/* ---> Quick Summary DEFINE A CALLBACK IN THE PARENT
USE THE PROPS SYSTEM TO PASS THE CALLBACK INTO THE CHILD COMPONENT, WHENEVER
SOMETHING INTERESING HAPPENS IN THE CHILD CALL THAT CALLBACK THEN YOU CAN PASS
IN ANY DATA THAT WILL EVENTUALLY SHOW UP BACK IN THE PARENT*/