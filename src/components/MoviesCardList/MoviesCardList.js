import './MoviesCardList.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ className, isSaved, movies, isNotSearched }) {
  return (
    <div className={`movies-list ${className || ''}`.trim() + ` ${isNotSearched? '' : 'movies-list_disable'}`}>
      <ul className="movies-list__conteiner">
        {
          movies.map((movie) => <MovieCard key={movie.id} isSaved={isSaved} {...movie} />)
        }
      </ul>
      <button className="button movies-list__button ">Ещё</button>
    </div>
  )
}

export default MoviesCardList;
