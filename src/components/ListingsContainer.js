import { useEffect, useState }from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchQuery }) {
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

  const currentListings = listings
  .filter(listing => {
    const searchRegEx = new RegExp(searchQuery, 'i')
    return searchRegEx.test(listing.description)
  })
  .map(listing => {
    return <ListingCard key={listing.id} {...listing} onDelete={handleDelete} /> 
  })

  return (
    <main>
      <ul className="cards">
        {currentListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
