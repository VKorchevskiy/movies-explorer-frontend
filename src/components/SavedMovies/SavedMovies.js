import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = ({
  className,
  movies,
  isDisplay,
  searchMovies,
  isShortMovies,
  setIsShortMovies,
  isLoading,
  isLoggedIn,

  onMovieButton,
}) => (
  <main className={`saved-movies ${className || ''}`.trim()}>
    <SearchForm searchMovies={searchMovies}>
      <FilterCheckbox
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />
    </SearchForm>
    <MoviesCardList
      isSavedPage={true}
      movies={movies}
      isDisplay={isDisplay}
      onMovieButton={onMovieButton}
    />
  </main>
);

export default SavedMovies;
