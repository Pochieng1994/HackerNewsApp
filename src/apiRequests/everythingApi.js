import axios from "axios"

const searchEveryNewsArticle = async (term) => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=${term}&apiKey=2fc5cddec8e0423eb7f0a1609f3c7dfe`)

  return response.data.articles;
}

export default searchEveryNewsArticle;

/*A User is going to enter in a search term were going to take it and that's
the term that were going to search for. So we are going to accept a search
term as an argument.
This is a pretty rock solid function that can be called on at any particular time to
get some data from an API.
*/