import React from "react";

function Search({ onSearchChange, searchQuery }) {

  const updateSearchTerm = ({ target : { value }}) => {
    onSearchChange(value)
  }

  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={updateSearchTerm}
      />
      
    </form>
  );
}

export default Search;
