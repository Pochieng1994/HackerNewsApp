function SearchBar({onSubmit}) {

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit('Google');
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input/>
      </form>
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
we are going to treat the entire process like an event handler. 
--->    Our App component is going to make a callback function we are then
going to pass the callback to the Searchbar through the props system then
at some point in time in our SearchBar we are going to Detect that the user
pressed the enter key we now need to communicate some data from the child
component up to the parent --> We are going to detect that the user pressed
the enter key then we are going to call the props.onSubmit function and
we are going to pass the search term to it. --> Inside of the callback function
back in the App component we are going to call searchEveryNewsArticle() we 
can take the search term plug it into search images that's going to make 
request off to the API were going to get a response back and get the news
articles that were requested ---> Quick Summary DEFINE A CALLBACK IN THE PARENT
USE THE PROPS SYSTEM TO PASS THE CALLBACK INTO THE CHILD COMPONENT, WHENEVER
SOMETHING INTERESING HAPPENS IN THE CHILD CALL THAT CALLBACK THEN YOU CAN PASS
IN ANY DATA THAT WILL EVENTUALLY SHOW UP BACK IN THE PARENT*/