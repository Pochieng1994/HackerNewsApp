import axios from "axios";

const searchTopHeadlines = async () => {
  const result = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2fc5cddec8e0423eb7f0a1609f3c7dfe')

  return result.data.articles;
};

export default searchTopHeadlines;