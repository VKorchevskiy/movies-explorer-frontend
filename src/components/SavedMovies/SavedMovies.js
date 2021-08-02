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

  onMovieLike,
}) => (
  <main className={`saved-movies ${className || ''}`.trim()}>
    <SearchForm searchMovies={searchMovies}>
      <FilterCheckbox
        isShortMovies={isShortMovies}
        setIsShortMovies={setIsShortMovies}
      />
    </SearchForm>
    <MoviesCardList
      isSaved={true}
      movies={movies}
      isDisplay={isDisplay}
      onMovieLike={onMovieLike}
    />
  </main>
);

export default SavedMovies;
