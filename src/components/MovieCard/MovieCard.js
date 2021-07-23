import './MovieCard.css';
import React from 'react';
import movie from '../../images/movies/run_is_freadom.png'

const MovieCard = () => (
  <li className="movie-card">
    <figure className="movie-card__figure">
      <img src={movie} alt="Name" className="movie-card__image" />
      <figcaption className="movie-card__caption">
        <h2 className="movie-card__title">NameNameN dddddddddddddd ddddddddd dddddddddddd ffwefweeam eNameNameName</h2>
        <button className="movie-card__button movie-card__button_like" type="button" aria-label="Нравится"></button>
        <button className="movie-card__button movie-card__button_delete" type="button" aria-label="Удалить"></button>
      </figcaption>
    </figure>
    <p className="movie-card__duration">1ч 27м</p>
  </li>
);

export default MovieCard;
