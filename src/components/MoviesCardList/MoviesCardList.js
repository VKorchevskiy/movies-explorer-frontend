import './MoviesCardList.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList() {
  return (
    <ul className="movies-list">
      {
        // movies.map((movie) => )
      }
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </ul>
  )
}

export default MoviesCardList;
