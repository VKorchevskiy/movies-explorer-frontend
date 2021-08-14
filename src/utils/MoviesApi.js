import { optionsMoviesApi, headers } from './constant';
import { checkResponse } from './halpers';

class MoviesApi {
  constructor(config, headers) {
    this.baseUrl = config.baseUrl;
    this.headers = headers;
  }

  getMovies = () => fetch(`${this.baseUrl}/beatfilm-movies`, {
    headers: { ...this.headers },
    method: 'GET',
  })
    .then(checkResponse)
}

export const moviesApi = new MoviesApi(optionsMoviesApi, headers);
