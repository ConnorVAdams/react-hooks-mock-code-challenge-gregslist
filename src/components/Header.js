import React from "react";
import Search from "./Search";

function Header({ onSearchChange,  searchQuery}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={onSearchChange} searchQuery={searchQuery}/>
    </header>
  );
}

export default Header;
