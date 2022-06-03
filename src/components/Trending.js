import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import ClipLoader from "react-spinners/ClipLoader";


const Trending = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const items = results.slice(5, 10);

    useEffect(() => {
      setLoading(true);
      fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
          // console.log(data)
          if(!data.errors) {
            setResults(data.results);
          } else {
            setResults([]); 
          }
      })
      .catch((err) => {
        console.log(err);
    });

      setLoading(false);
      }, []);
 

return (
  <>
  {loading ? 
    <ClipLoader color={'#F5A623'} loading={loading} size={150} />
  :
  <div className='trending-container'>
        <div className='top-header'>
          <i className="fa-solid fa-satellite-dish"></i>Trending
        </div>
         
        <section className='banner'>
          {items.map((movie) => (
             <div className="movie-banner" key={movie.id}>
                <img className='banner-img'
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                    />
              </div>
            ))}
        </section> 

         <section className='all-trends'>
           <div className='top-header'>Our Recommendations</div> 
            {results.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
         </section>
    </div>
  }
  </>
)}

export default Trending;