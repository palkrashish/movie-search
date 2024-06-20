import React from "react";
import "./Search.css";
const Search = ({handleSearch}) => {
  return (
    <div className="search">
      <input type="search" placeholder="Enter something to search..." 
      className="search-input"
      onChange={(event)=>handleSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
