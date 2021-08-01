import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({
  className,
  movies,
  isDisplay,
  saveMovie,
  searchMovies,
  isShortMovies,
  setIsShortMovies
}) => {



  return (
    <main className={`movies ${className || ''}`.trim()}>
      <SearchForm searchMovies={searchMovies} >
        <FilterCheckbox isShortMovies={isShortMovies} setIsShortMovies={setIsShortMovies} />
      </SearchForm>
      <MoviesCardList isSaved={false} movies={movies} isDisplay={isDisplay} saveMovie={saveMovie} />
    </main>
  )
};

export default Movies;
