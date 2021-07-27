import './MovieCard.css';
import React from 'react';
import { movie } from '../../utils/constant';

const MovieCard = ({ className, isSaved }) => (
  <li className={`movie-card ${className || ''}`.trim()}>
    <figure className="movie-card__figure">
      <img src={movie} alt="Name" className="movie-card__image" />
      <figcaption className="movie-card__caption">
        <h2 className="movie-card__title">Какое-то название фильма</h2>
        <button className={`button movie-card__button movie-card__button_like ${isSaved ? 'movie-card__button_disable' : ''}`.trim()} type="button" aria-label="Нравится"></button>
        <button className={`button movie-card__button movie-card__button_delete type="button ${!isSaved ? 'movie-card__button_disable' : ''}`.trim()} aria-label="Удалить"></button>
      </figcaption>
    </figure>
    <p className="movie-card__duration">1ч 27м</p>
  </li>
);

export default MovieCard;
