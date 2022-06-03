import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Card  from "./Card";

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  return (
      <div className="favorites-container">
        <div className="header">
        <div className='top-header'>
          <i className="fa-solid fa-fire"></i>My Favorites
        </div>
        
        <div className="count-pill">
            {favorites.length} {favorites.length === 1 ? "Movie" : "Movies"}
        </div>
      </div>

        {favorites.length > 0 ? (
          <div className="movie-grid">
            {favorites.map((movie) => (
              <Card movie={movie} key={movie.id} type="favorites" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    
  );
};
 export default Favorites;