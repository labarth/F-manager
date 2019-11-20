/* eslint prefer-promise-reject-errors: 0 */

const handleErrors = (response) => {
  if (!response.ok) {
    return response.text().then((text) => {
      if (text) {
        try {
          return Promise.reject(JSON.parse(text));
        } catch (e) {
          return Promise.reject(`${response.url}: [${response.status}] ${response.statusText}`);
        }
      }
      return Promise.reject(`${response.url}: [${response.status}] ${response.statusText}`);
    });
  }
  return response;
};

export class CoreAPIService {
  static get(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => error);
  }

  static post(url, data) {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(handleErrors)
      .then((res) => res.text())
      .then((text) => {
        if (text) {
          try {
            return JSON.parse(text);
          } catch (e) {
            return {};
          }
        }
        return {};
      });
  }

  static patch(url, data) {
    return fetch(url, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(handleErrors)
      .then((res) => res.text())
      .then((text) => {
        if (text) {
          try {
            return JSON.parse(text);
          } catch (e) {
            return {};
          }
        }
        return {};
      });
  }
}
