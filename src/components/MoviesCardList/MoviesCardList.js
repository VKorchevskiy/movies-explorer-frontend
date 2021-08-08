import './MoviesCardList.css';
import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import {
  MAX_WIDTH,
  MEDIUM_WIDTH,
  MAX_QUANTITY_CARDS,
  MORE_MAX_QUANTITY_CARDS,
  MEDIUM_QUANTITY_CARDS,
  MORE_MEDIUM_QUANTITY_CARDS,
  MIN_QUANTITY_CARDS,
  MORE_MIN_QUANTITY_CARDS,
} from '../../utils/constant';

const MoviesCardList = ({ className, isSavedPage, movies, isDisplay, onMovieButton }) => {

  const [shownCards, setShownCards] = useState(12);
  const [moreCards, setMoreCards] = useState(0);
  const windowWidth = useWindowWidth();

  function showMoreCards() {
    setShownCards(shownCards + moreCards);
  }

  useEffect(() => {
    if (windowWidth >= MAX_WIDTH) {
      setShownCards(MAX_QUANTITY_CARDS);
      setMoreCards(MORE_MAX_QUANTITY_CARDS);
    } else if (windowWidth < MAX_WIDTH && windowWidth >= MEDIUM_WIDTH) {
      setShownCards(MEDIUM_QUANTITY_CARDS);
      setMoreCards(MORE_MEDIUM_QUANTITY_CARDS);
    } else {
      setShownCards(MIN_QUANTITY_CARDS);
      setMoreCards(MORE_MIN_QUANTITY_CARDS);
    }
  }, [windowWidth]);

  const moreButtonDisableClass = movies.length <= shownCards ? 'movies-list__button_disable' : '';

  return (
    <div className={`movies-list ${className || ''}`.trim() + ` ${isDisplay ? '' : 'movies-list_disable'}`}>
      <ul className="movies-list__conteiner">
        {
          movies.map((movie) => <MovieCard
            key={isSavedPage ? movie._id : movie.id}
            isSavedPage={isSavedPage}
            onMovieButton={onMovieButton}
            {...movie}
          />).filter((movie, i) => i < shownCards)
        }
      </ul>
      <button className={`button movies-list__button ${moreButtonDisableClass}`.trim()} onClick={showMoreCards} >Ещё</button>
    </div>
  )
}

export default MoviesCardList;
