import './MovieCard.css';
import React, { useContext } from 'react';
import { optionsMoviesApi } from '../../utils/constant';
import { convertDuration } from '../../utils/halpers';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const MovieCard = ({ className, isSaved, saveMovie, ...props }) => {
  const currentUser = useContext(CurrentUserContext);
  const url = optionsMoviesApi.baseUrl + props.image.url;
  const convertMovieProps = (props) => {
    const movie = {
      country: props.country,
      director: props.director,
      duration: props.duration,
      year: props.year,
      description: props.description,
      image: url,
      trailer: props.trailerLink,
      thumbnail: optionsMoviesApi.baseUrl + props.image.formats.thumbnail.url,
      movieId: props.id,
      nameRU: props.nameRU,
      nameEN: props.nameEN,
    }
    return movie
  }

  return (
    <li className={`movie-card ${className || ''}`.trim()}>
      <figure className="movie-card__figure">
        <a className="link movie-card__link" href={props.trailerLink} target="_blank" rel="noreferrer" >
          <img className="movie-card__image" src={`${url}`} alt={`Постер к фильму: "${props.nameRU}".`} />
        </a>
        <figcaption className="movie-card__caption">
          <h2 className="movie-card__title">{props.nameRU}</h2>
          <button className={`button movie-card__button movie-card__button_like ${isSaved ? 'movie-card__button_disable' : ''}`.trim()}
            type="button"
            aria-label="Нравится"
            onClick={() => {console.log(convertMovieProps(props));saveMovie(convertMovieProps(props))}}></button>
          <button className={`button movie-card__button movie-card__button_delete type="button ${!isSaved ? 'movie-card__button_disable' : ''}`.trim()}
            type="button"
            aria-label="Удалить"></button>
        </figcaption>
      </figure>
      <p className="movie-card__duration">{convertDuration(props.duration)}</p>
    </li>
  )
};

export default MovieCard;
