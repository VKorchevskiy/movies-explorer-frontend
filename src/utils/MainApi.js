import { optionsMainApi, headers } from './constant';
import { checkResponse } from './halpers';

class MainApi {
  constructor(config, headers) {
    this._baseUrl = config.baseUrl;
    this._headers = headers;
  }

  _getAuthHeaders(jwt) {
    return {
      ...this._headers,
      'Authorization': `Bearer ${jwt}`,
    }
  }

  register = ({ name, email, password }) => fetch(`${this._baseUrl}/signup`, {
    headers: this._headers,
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkResponse)
  // .then(data => console.log(data))

  authorize = ({ email, password }) => fetch(`${this._baseUrl}/signin`, {
    headers: this._headers,
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
  // .then(data => console.log(data))

  getCurrentUser = (jwt) => fetch(`${this._baseUrl}/users/me`, {
    headers: this._getAuthHeaders(jwt),
    method: 'GET',
  })
    .then(checkResponse)

  putchUser = ({ name, email }, jwt) => fetch(`${this._baseUrl}/users/me`, {
    headers: this._getAuthHeaders(jwt),
    method: 'PATCH',
    body: JSON.stringify({
      name: name,
      email: email,
    })
  })
    .then(checkResponse)

  getSavedMovies = (jwt) => fetch(`${this._baseUrl}/movies`, {
    headers: this._getAuthHeaders(jwt),
    method: 'GET',
  })
    .then(checkResponse)

  saveMovie = (movie, jwt) => fetch(`${this._baseUrl}/movies`, {
    headers: this._getAuthHeaders(jwt),
    method: 'POST',
    body: JSON.stringify({
      ...movie,
    })
  })
    .then(checkResponse)

  deleteMovie = (id, jwt) => fetch(`${this._baseUrl}/movies/${id}`, {
    headers: this._getAuthHeaders(jwt),
    method: 'DELETE',
  })
    .then(checkResponse)

}

export const mainApi = new MainApi(optionsMainApi, headers);
