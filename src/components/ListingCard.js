import { useState } from "react";

function ListingCard({ id, description, image, location }) {
  const [isFavorited, setIsFavorited] = useState(false)
  
  const handleFavorite = (e) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        favorited: !isFavorited
      })
    })
    .then(resp => resp.json())
    .then(setIsFavorited(isFavorited => !isFavorited))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick={handleFavorite}>
        {isFavorited ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
