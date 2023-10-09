import { useState }from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchQuery, currentListings, onDelete }) {
  const [currentSort, setCurrentSort] = useState('Alphabetical')
  const handleSort = () => {
    
  }

  const listingsToDisplay = currentListings.map(listing => {
    return <ListingCard key={listing.id} {...listing} onDelete={onDelete} /> 
  })

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
