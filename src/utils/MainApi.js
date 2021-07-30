import { optionsMainApi, headers } from '../../../Other/constant';
import { checkResponse } from './halpers';

class MainApi {
  constructor(config, headers) {
    this.baseUrl = config.baseUrl;
    this.headers = headers;
  }

  register = ({ name, email, password }) => fetch(`${this.baseUrl}/signup`, {
    headers: this.headers,
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkResponse)
  // .then(data => console.log(data))

  authorize = ({ email, password }) => fetch(`${this.baseUrl}/signin`, {
    headers: this.headers,
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse);
  // .then(data => console.log(data))



}

export const mainApi = new MainApi(optionsMainApi, headers);
