import { checkResponse } from "./utils";
export const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;


class MainApi {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
          credentials: 'include',
          headers: this._headers,
        }).then(checkResponse);
      }
    
      editProfile(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: "PATCH",
          credentials: 'include',
          headers: this._headers,
          body: JSON.stringify({
            name: name,
            email: email,
          }),
        }).then(checkResponse);
      }

      getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
          credentials: 'include',
          headers: this._headers,
        }).then(checkResponse);
      }

      addMovie(country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId) {
        return fetch(`${this._baseUrl}/movies`, {
          method: "POST",
          credentials: 'include',
          headers: this._headers,
          body: JSON.stringify({
            country: country, 
            director: director, 
            duration: duration, 
            year: year, 
            description: description, 
            image: image, 
            trailerLink: trailerLink, 
            nameRU: nameRU, 
            nameEN: nameEN, 
            thumbnail: thumbnail, 
            movieId: movieId
          }),
        }).then(checkResponse);
      }
      deleteMovie(_id) {
        return fetch(`${this._baseUrl}/cards/${_id}`, {
          method: "DELETE",
          credentials: 'include',
          headers: this._headers,
        }).then(checkResponse);
      }
}

export const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });