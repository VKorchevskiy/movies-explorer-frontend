import './MoviesCardList.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ className, isSaved }) {
  return (
    <div className={`movies-list ${className || ''}`.trim()}>
      <ul className="movies-list__conteiner">
        {
          // movies.map((movie, i) => )
        }
        <MovieCard isSaved={isSaved} />
        <MovieCard isSaved={isSaved} />
        <MovieCard isSaved={isSaved} />
        <MovieCard isSaved={isSaved} />
      </ul>
      <button className="button movies-list__button ">Ещё</button>
    </div>
  )
}

export default MoviesCardList;
