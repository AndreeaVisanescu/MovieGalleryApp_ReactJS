import React from "react";
import MovieControls from "./MovieControls";

 const Card = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <div className='info-card'>
        <div className='header'>
          <h2 className='title'>{movie.title}</h2>
        </div>
        <MovieControls type={type} movie={movie} />
      </div>
    </div>
  );
};

export default Card;