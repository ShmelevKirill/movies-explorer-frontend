class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _fetch(way, methodName) {
    return fetch(`${this._url}${way}`, {
      method: methodName,
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getAllFilms() {
    return this._fetch("/beatfilm-movies", "GET");
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "content-type": "application/json",
  },
});

export default moviesApi;