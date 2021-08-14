import { optionsMoviesApi, HOUR, DURATION_SHORT_MOVIE } from './constant';

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    const error = new Error(`Ошибка ${res.status}: ${res.statusText}`);
    error.status = res.status;
    error.userMessage = res.message;
    return Promise.reject(error);
  }
};

export const getErrorMessage = (err, {
  invalidDataMessage,
  authErrorMessage,
  forbiddenMessage,
  notFoundMessage,
  conflictMessage,
  manyRequestsMessage,
  defaultMessage
}) => {
  switch (err.status) {
    case 400: return invalidDataMessage || defaultMessage;
    case 401: return authErrorMessage || defaultMessage;
    case 403: return forbiddenMessage || defaultMessage;
    case 404: return notFoundMessage || defaultMessage;
    case 409: return conflictMessage || defaultMessage;
    case 429: return manyRequestsMessage || defaultMessage;
    default: return defaultMessage;
  }
};

export const convertDuration = (duration) => {
  return duration < HOUR
    ? `${duration} минут`
    : `${Math.floor(duration / HOUR)}ч ${duration % HOUR}м`;
};

export const filterMovies = (movies, dataSearch) => movies.filter((movie) => {
  const regExp = new RegExp(dataSearch.search, 'gi');
  return (
    regExp.test(movie.nameRU)// ||
    // regExp.test(movie.nameEN)  ||
    // regExp.test(movie.director) ||
    // regExp.test(movie.country) ||
    // regExp.test(movie.year)
  )
})

export const filterShortMovies = (movies) => movies.filter((movie) => movie.duration < DURATION_SHORT_MOVIE);

export const convertMovieProps = (props) => {
  const movie = {
    country: props.country,
    director: props.director,
    duration: props.duration,
    year: props.year,
    description: props.description,
    image: optionsMoviesApi.baseUrl + props.image.url,
    trailer: props.trailerLink,
    thumbnail: optionsMoviesApi.baseUrl + props.image.formats.thumbnail.url,
    movieId: props.id,
    nameRU: props.nameRU,
    nameEN: props.nameEN,
  }
  return movie
}
