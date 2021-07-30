import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ className, movies, isNotSearched, searchMovies }) => (


  <main className={`movies ${className || ''}`.trim()}>
    <SearchForm searchMovies={searchMovies} >
      <FilterCheckbox />
    </SearchForm>
    <MoviesCardList isSaved={false} movies={movies} isNotSearched={isNotSearched} />
  </main>
);

export default Movies;
