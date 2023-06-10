import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SearchBar from "./SearchBar";

// DOM for Document Object Model : data representation of a webpage

/*

React is a JavaScript library for building user interfaces, but it doesn't directly manipulate
 the DOM. Instead, React creates a virtual representation of the UI called the "virtual DOM"
  which is more efficient to work with. ReactDOM is responsible for taking this virtual DOM
  and efficiently updating the real DOM to reflect the changes.
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
When you wrap your application or a portion of your application with <React.StrictMode>, 
React performs additional checks and warnings to detect potential problems and provide 
helpful warnings in the console. 

*/
root.render(
  <>
    <h1>Hello Word</h1>

    <SearchBar />
  </>
);
