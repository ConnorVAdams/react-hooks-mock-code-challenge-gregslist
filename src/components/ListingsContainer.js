import { useEffect, useState }from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ currentListings, onDelete }) {
  const [currentSort, setCurrentSort] = useState('location')

  const handleSort = ({ target: { value } }) => {
    const sortedListings = currentListings.sort((a, b) => {
      const listingA = a[value]
      const listingB = b[value]
      if (listingA < listingB) {
        return -1
      } else {
        return 1
      }
    })
    setCurrentSort(currentSort => currentSort === 'location' ? 'description' : 'location')
    return sortedListings
  }



  const listingsToDisplay = currentListings.map(listing => {
    return <ListingCard key={listing.id} {...listing} onDelete={onDelete} /> 
  })

  return (
    <main>
      <select onChange={handleSort} name='sort' id='sortButton'>
          <option name='location' value='location'>A-Z by Location</option>
          <option name='description' value='description'>A-Z by Description</option>
        </select>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
