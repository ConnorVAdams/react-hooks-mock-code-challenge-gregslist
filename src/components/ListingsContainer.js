import { useEffect, useState }from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchQuery }) {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])
  
  const currentListings = listings
  .map(listing => {
    return <ListingCard key={listing.id} {...listing}/> 
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
