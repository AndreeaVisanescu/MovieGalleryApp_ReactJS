import React, {useState, useEffect} from 'react';

const ScienceFiction = () => {
    const [results, setResults] = useState([]);
    const items2 = results.slice(5, 15);

    useEffect(() => {
        fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_genres=878`)
        .then((res) => res.json())
        .then((data) => {
          if(!data.errors) {
            setResults(data.results);
          } else {
            setResults([]); 
          }
      }).catch((err) => {
        console.log(err);
    });
    })

  return (
    <div>
       <div className='banner-wrapper'>
              {items2.map((movie) => (
                <div className="movie-banner" key={movie.id}>
                    <img className='banner-img'
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={`${movie.title} Poster`}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ScienceFiction;
