import React, {useState} from 'react';
import MovieCard from './MovieCard';
import ClipLoader from "react-spinners/ClipLoader";


const SearchList = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSearch = e => {
    e.preventDefault();

  setQuery(e.target.value);
  setLoading(true);
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
  ).then(res => res.json())
  .then(data=> {
    console.log(data.results);
    if(!data.errors) {
      setResults(data.results);
    } else {
      setResults([]);
    }
  })
  .catch((err) => {
    console.log(err);
})
  
  setLoading(false);
}

  return (
    <>
     {loading ? 
     <ClipLoader color={'#F5A623'} loading={loading} size={150} />
     :
     <div className='search-container'>
        <div className='input-wrapper'>
          <input 
          type='text'
          placeholder='Search for a movie...'
          value={query}
          onChange={getSearch}
          />
          <div
            onClick={() => setQuery(() => "")}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>  
        </div>

        <div className={'text-search ' + (results.length > 0 ? 'hide' : '')}>
          Search some titles...
        </div>

        <div>
          {results.length > 0 && (
                <ul className='results'>
                  {results.map((movie) => (
                    <li key={movie.id} className='result-movie'>
                      <MovieCard movie={movie}/>
                    </li>
                  ))}
                </ul>
              )}
        </div>
    </div>
      }
    </>
  )
}

export default SearchList;
