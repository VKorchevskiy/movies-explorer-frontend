import './SavedMovies.css';
import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default SavedMovies;
