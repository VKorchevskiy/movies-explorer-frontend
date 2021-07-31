import './MoviesCardList.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MoviesCardList = ({ className, isSaved, movies, isDisplay }) => {
  return (
    <div className={`movies-list ${className || ''}`.trim() + ` ${isDisplay? '' : 'movies-list_disable'}`}>
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
