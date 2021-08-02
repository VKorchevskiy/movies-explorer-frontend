import {optionsMoviesApi} from './constant';

export const checkResponse = (res) => res.ok
  ? res.json() :
  Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));

export const convertDuration = (duration) => {
  return duration < 60
    ? `${duration} минут`
    : `${Math.floor(duration / 60)}ч ${duration % 60}м`;
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

export const filterShortMovies = (movies) => movies.filter((movie) => movie.duration < 40 );

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
