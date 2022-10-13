class MainApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res);
  }

  async _fetch(way, methodName) {
    const res = await fetch(`${this._url}${way}`, {
      method: methodName,
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async _fetchWithBody(way, methodName, bodyContent) {
    const res = await fetch(`${this._url}${way}`, {
      method: methodName,
      headers: this._headers,
      body: JSON.stringify(bodyContent),
    });
    return this._checkResponse(res);
  }


  getAllFilms() {
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
    return this._fetch("/movies", "GET");
  }

  addNewFilm(newFilm) {
    return this._fetchWithBody("/movies", "POST", newFilm);
  }

  deleteMovie(movieId) {
    return this._fetch(`/movies/${movieId}`, "DELETE");
  }

  getUserInfo() {
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    };
    return this._fetch("/users/me", "GET");
  }

  setUserInfo(newUserInfo) {
    return this._fetchWithBody("/users/me", "PATCH", newUserInfo);
  }

  register({ name, email, password }) {
    return this._fetchWithBody("/signup", "POST", {
      name: name,
      email: email,
      password: password,
    });
  }

  authorize({ email, password }) {
    return this._fetchWithBody("/signin", "POST", {
      email: email,
      password: password,
    });
  }

  getContent = async (jwt) => {
    const res = await fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Accept: "applications/json",
        "Content-type": "applications/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return this._checkResponse(res);
  };
}

const mainApi = new MainApi({
  baseUrl: "https://explorer.movies.nomoredomains.sbs",
  // baseUrl: "http://localhost:3000",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export default mainApi;