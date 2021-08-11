import './Movies.css';
import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Movies = ({
  className,
  movies,
  isDisplay,
  searchMovies,
  isShortMovies,
  setIsShortMovies,
  isLoading,
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
      <main className={`movies ${className || ''}`.trim()}>
        <SearchForm searchMovies={searchMovies} >
          <FilterCheckbox
            isShortMovies={isShortMovies}
            setIsShortMovies={setIsShortMovies} />
        </SearchForm>
        {
          isLoading
            ? <Preloader />
            : notFoundMovies
              ? <p className="movies__not-found">{notFoundMovies}</p>
              : <MoviesCardList
                isSavedPage={false}
                movies={movies}
                isDisplay={isDisplay}
                onMovieButton={onMovieButton}
              />
        }
      </main>
      <Footer />
    </>
  )
};

export default Movies;
