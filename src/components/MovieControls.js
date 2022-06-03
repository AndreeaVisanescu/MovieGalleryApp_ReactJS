import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

 const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToFavorites,
    moveToWatchlist,
    removeFromFavorites,
  } = useContext(GlobalContext);

  return (
    <div className="buttons-control-container">

      {type === "watchlist" && (
        <>
          <button 
          className="move-favorites-btn" 
          onClick={() => addMovieToFavorites(movie)}>
          Move to Favorites
          </button>

          <button
            className="remove-watchlist-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}>
            Remove from Watchlist
          </button>
        </>
      )}

      {type === "favorites" && (
        <>
          <button 
          className="move-watchlist-btn" 
          onClick={() => moveToWatchlist(movie)}>
          Move to Watchlist
          </button>

          <button
            className="remove-favorites-btn"
            onClick={() => removeFromFavorites(movie.id)}>
            Remove from Favorites
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;