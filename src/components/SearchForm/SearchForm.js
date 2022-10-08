import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import icon from "../../images/search-icon.svg"; 

function SearchForm({ searchFilms, setIsSuccess, setMessageInfo, setIsOpen }) {
  const [filmName, setFilmName] = useState("");
  const [isShortFilm, setIsShortFilm] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/movies") {
      if (localStorage.getItem("isSearch") !== null) {
        try {
          setFilmName(localStorage.getItem("valueSearch"));
          setIsShortFilm(JSON.parse(localStorage.getItem("isShortFilm")));
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, []);

  function handleChangeFilmName(e) {
    setFilmName(e.target.value);
  }

  function handleShortFilms() {
    if (isShortFilm) {
      setIsShortFilm(false);
      searchFilms(filmName, false);
      if (pathname === "/movies") {
        localStorage.setItem("isShortFilm", JSON.stringify(false));
      }
    } else {
      setIsShortFilm(true);
      searchFilms(filmName, true);
      if (pathname === "/movies") {
        localStorage.setItem("isShortFilm", JSON.stringify(true));
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (filmName === "") {
      setIsSuccess(false);
      setMessageInfo("Нужно ввести ключевое слово");
      setIsOpen(true);
    } else {
      searchFilms(filmName, isShortFilm);

      if (pathname === "/movies") {
        localStorage.setItem("valueSearch", filmName);
        localStorage.setItem("isShortFilm", JSON.stringify(isShortFilm));
      }
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <fieldset className="search-form__film-search">
          <img className="search-form__icon" src={icon} alt="Иконка поиска"></img>
          <input
            type="search"
            placeholder="Фильм"
            className="search-form__query"
            onChange={handleChangeFilmName}
            value={filmName}
          />
          <button className="app__button search-form__find-button" type="submit">Найти</button>
        </fieldset>
        <FilterCheckbox
          handleShortFilms={handleShortFilms}
          isShortFilm={isShortFilm}
        />
      </div>
    </form>
  );
}

export default SearchForm;