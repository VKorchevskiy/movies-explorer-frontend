import './MovieCard.css';
import React from 'react';
import { optionsMoviesApi } from '../../utils/constant';
import { convertDuration } from '../../utils/halpers';

const MovieCard = ({ className, isSaved, nameRU, duration, trailerLink, image }) => {

  return (
    <li className={`movie-card ${className || ''}`.trim()}>
      <figure className="movie-card__figure">
        <a className="link movie-card__link" href={trailerLink} target="_blank" rel="noreferrer" >
          <img className="movie-card__image" src={`${optionsMoviesApi.baseUrl + image.url}`} alt={`Постер к фильму: "${nameRU}".`} />
        </a>
        <figcaption className="movie-card__caption">
          <h2 className="movie-card__title">{nameRU}</h2>
          <button className={`button movie-card__button movie-card__button_like ${isSaved ? 'movie-card__button_disable' : ''}`.trim()} type="button" aria-label="Нравится"></button>
          <button className={`button movie-card__button movie-card__button_delete type="button ${!isSaved ? 'movie-card__button_disable' : ''}`.trim()} aria-label="Удалить"></button>
        </figcaption>
      </figure>
      <p className="movie-card__duration">{convertDuration(duration)}</p>
    </li>
  )
};

export default MovieCard;
