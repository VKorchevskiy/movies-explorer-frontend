import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ className }) => (
  <main className={`movies ${className || ''}`.trim()}>
    <SearchForm>
      <FilterCheckbox />
    </SearchForm>
    <MoviesCardList />
  </main>
);

export default Movies;
