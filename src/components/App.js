import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from './Form'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])
  
  const handleDelete = (id) => {
    const newListings = listings.filter(listing => listing.id !== id)
    setListings(newListings)
    }

  const handleSearchChange = (searchTerm) => {
    setSearchQuery(searchTerm)
  }

  const handleSubmit = (newListing) => {
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newListing)
      })
      .then(resp => resp.json())
      .then(newListing => setListings([...listings, newListing]))
  }

  const currentListings = listings
  .filter(listing => {
    const searchRegEx = new RegExp(searchQuery, 'i')
    return searchRegEx.test(listing.description)
  })


  return (
    <div className="app">
      <Header onSearchChange={handleSearchChange} searchQuery={searchQuery}/>
        <Form onSubmit={handleSubmit} />
        <ListingsContainer onDelete={handleDelete} searchQuery={searchQuery} currentListings={currentListings}/>
    </div>
  );
}

export default App;
