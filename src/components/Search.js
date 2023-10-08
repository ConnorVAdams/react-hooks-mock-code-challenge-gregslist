import React from "react";

function Search({ onSearchChange, searchQuery }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  const updateSearchTerm = ({ target : { value }}) => {
    onSearchChange(value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={updateSearchTerm}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
