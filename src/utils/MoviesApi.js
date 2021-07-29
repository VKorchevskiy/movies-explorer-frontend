import { optionsMoviesApi, headersMoviesApi } from '../../../Other/constant';

class MoviesApi {
  constructor(config, headers) {
    this.baseUrl = config.baseUrl;
    this.headers = headers;
  }

  _checkResponse = (res) => res.ok ? res.json() : Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));

  getMovies = () => {
    console.log(this.baseUrl, this.headers)
    return fetch(this.baseUrl, {
      headers: { ...this.headers },
      method: 'GET',
    })
      .then(this._checkResponse)
      .then(data => console.log(data))
  }

}

export const moviesApi = new MoviesApi(optionsMoviesApi, headersMoviesApi);
