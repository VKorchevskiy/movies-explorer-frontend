import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = ({
  className,
  movies,
  isDisplay,
  searchMovies,
  isShortMovies,
  setIsShortMovies,
  isLoading,
  isLoggedIn,

  onMovieLike,
}) => {

  return (
    <main className={`movies ${className || ''}`.trim()}>
      <SearchForm searchMovies={searchMovies} >
        <FilterCheckbox
          isShortMovies={isShortMovies}
          setIsShortMovies={setIsShortMovies} />
      </SearchForm>
      {
        isLoading
          ? <Preloader />
          : <MoviesCardList
            isSavedPage={false}
            movies={movies}
            isDisplay={isDisplay}
            onMovieLike={onMovieLike}
          />
      }
    </main>
  )
};

export default Movies;
