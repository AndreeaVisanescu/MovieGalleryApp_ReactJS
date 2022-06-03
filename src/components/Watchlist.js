import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Card from './Card';

const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);

  return (
      <div className="watchlist-container">
        <div className="header">
          <div className='top-header'>
            <i className="fa-solid fa-tv"></i>My watchlist
          </div>

          <div className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </div>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-card-watchlist">
            {watchlist.map((movie, index) => (
                <Card movie={movie} key={index} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
  );
}

export default Watchlist;
