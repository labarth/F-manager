const coreAPIurl = 'http://localhost:3000/';

export class CoreAPIService {
  static get(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((json) => json);
  }
}
