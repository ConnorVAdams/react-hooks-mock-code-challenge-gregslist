import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (searchTerm) => {
    setSearchQuery(searchTerm)
  }

  return (
    <div className="app">
      <Header onSearchChange={handleSearchChange} searchQuery={searchQuery}/>
      <ListingsContainer searchQuery={searchQuery}/>
    </div>
  );
}

export default App;
