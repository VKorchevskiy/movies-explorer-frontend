import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({ className }) => (
  <main className={`saved-movies ${className || ''}`.trim()}>
    <SearchForm>
      <FilterCheckbox />
    </SearchForm>
    <MoviesCardList />
  </main>
);

export default SavedMovies;
