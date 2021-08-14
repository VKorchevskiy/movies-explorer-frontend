import './MovieCard.css';
import React, { useContext } from 'react';
import { optionsMoviesApi } from '../../utils/constant';
import { convertDuration, convertMovieProps } from '../../utils/halpers';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';

const MovieCard = ({ className, isSavedPage, onMovieButton, ...props }) => {
  const savedMovies = useContext(SavedMoviesContext)

  const isLiked = savedMovies.some((savedMovie) => (props.movieId || props.id) === savedMovie.movieId);

  return (
    <li className={`movie-card ${className || ''}`.trim()}>
      <figure className="movie-card__figure">
        <a className="link movie-card__link" href={isSavedPage ? props.trailer : props.trailerLink} target="_blank" rel="noreferrer" >
          <img className="movie-card__image" src={isSavedPage ? props.image : `${optionsMoviesApi.baseUrl + props.image.url}`} alt={`Постер к фильму: "${props.nameRU}".`} />
        </a>
        <figcaption className="movie-card__caption">
          <h2 className="movie-card__title">{props.nameRU}</h2>
          <button
            className={`button movie-card__button ${isLiked ? 'movie-card__button_like-active' : 'movie-card__button_like'} ${isSavedPage ? 'movie-card__button_disable' : ''}`.trim()}
            type="button"
            aria-label="Нравится"
            onClick={() => {
              onMovieButton(isLiked, convertMovieProps(props));
            }}
          ></button>
          <button
            className={`button movie-card__button movie-card__button_delete type="button ${!isSavedPage ? 'movie-card__button_disable' : ''}`.trim()}
            type="button"
            aria-label="Удалить"
            onClick={() => onMovieButton(props._id)}
          ></button>
        </figcaption>
      </figure>
      <p className="movie-card__duration">{convertDuration(props.duration)}</p>
    </li>
  )
};

export default MovieCard;
