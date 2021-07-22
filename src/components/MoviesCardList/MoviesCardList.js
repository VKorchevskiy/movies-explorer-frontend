import './MoviesCardList.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList() {
  return (
    <div className="movies-list">
      <ul className="movies-list__conteiner">
        {
          // movies.map((movie) => )
        }
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ul>
        <button className="movies-list__button ">Ещё</button>
    </div>
  )
}

export default MoviesCardList;
