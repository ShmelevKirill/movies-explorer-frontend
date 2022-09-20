import React from "react";
import "./SearchForm.css";
import icon from "../../images/search-icon.svg";

export default function SearchForm() {
  return (
    <form className="search-form" novalidate>
      <div className="search-form__container">
        <fieldset className="search-form__film-search">
          <img className="search-form__icon" src={icon} alt="Иконка поиска"></img>
          <input
            type="search"
            placeholder="Фильм"
            className="search-form__query"
            required
          ></input>
          <button className="app__button search-form__find-button" type="submit">Найти</button>
        </fieldset>
        <FilterCheckbox text="Короткометражки" />
      </div>
    </form>
  );
}