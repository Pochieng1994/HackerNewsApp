import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import searchTopHeadlines from "./apiRequests/topHeadlinesApi";

searchTopHeadlines()

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element);

root.render(<App/>);

//1.)Import React, React-Dom, and other pieces youll need to use in this file
//2.) Get reference to the div with the id root.
//3.) Tell React that we want to show our application inside of this element.
//4.)Show the component on the screen.

