import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => (
  <>
    <SearchForm>
      <FilterCheckbox />
    </SearchForm>
    <MoviesCardList />
  </>
  );

export default SavedMovies;
