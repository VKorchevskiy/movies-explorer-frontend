import './SavedMovies.css';
import React, { useEffect } from 'react';
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
  notFoundMovies,
  setNotFoundMovies,
}) => {

  useEffect(() => {
    setNotFoundMovies('');
  }, []);

  return (
      <main className={`saved-movies ${className || ''}`.trim()}>
        <SearchForm searchMovies={searchMovies}>
          <FilterCheckbox
            isShortMovies={isShortMovies}
            setIsShortMovies={setIsShortMovies}
          />
        </SearchForm>
        {notFoundMovies
          ? <p className="saved-movies__not-found">{notFoundMovies}</p>
          : <MoviesCardList
            isSavedPage={true}
            movies={movies}
            isDisplay={isDisplay}
            onMovieButton={onMovieButton}
          />
        }
      </main>
  );
}

export default SavedMovies;
