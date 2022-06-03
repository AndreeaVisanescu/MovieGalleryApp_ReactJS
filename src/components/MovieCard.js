import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const MovieCard = ({movie}) => {
    const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.id);
    const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className='movie-card'>
      <div className='poster-wrapper'>
          {movie.poster_path ? (
              <img src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt='movie poster'/>
          ):(
              <div className='filler-poster'></div>
          )}
      </div>

      <div className='info'>
          <div className='header'>
            <h2 className='title'>{movie.title}</h2>
            <h3 className='release-date'>
                {movie.release_date ? 
                movie.release_date.substring(0,4) :
                '-'
                } 
            </h3>
          </div>

          <div className='button-wrapper'>
            <button className={'btn ' + (watchlistDisabled === true ? 'disabled' : '')}
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
            >
            Add to WatchList
            </button>
          </div>
      </div>
    </div>
  )
}

export default MovieCard;
