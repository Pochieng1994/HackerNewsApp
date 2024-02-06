function SearchBar() {
  return (
    <div>
      SearchBar
    </div>
  )
}

export default SearchBar;

/*The search term is going to be defined in this component because
this is where the user will input whatever term they are searching for
and since we are going to define our searchEveryNewsArticle function
in the App component which is the parent component we need to 
communicate the term the user inputs into this component up to the App
component. so that we can we can use the Prop system to communicate
the Search results to the SearchResults component*/

/*Inorder to communicate info from a Child component to a parent
 */