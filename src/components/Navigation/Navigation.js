import React from "react";
import { useHistory, Link } from "react-router-dom";
import icon from "../../images/profile-icon.svg";
import "./Navigation.css";

export default function Navigation({
  isLogged,
  isClosed,
  onNavOpen,
  onNavClose,
}) {

  const history = useHistory();
  const current = history.location.pathname;

  const generateClassName = (path) => {
    return `navigation__link ${
      path === current ? `navigation__link_current` : ""
    } app__button`;
  };

  const containerClassName = `navigation__container ${
    isLogged && "navigation__container_logged"
  }`;

  return (
    <div className={`navigation ${isClosed && "navigation_closed"}`}>
      <button
        className="app_button navigation__toggle"
        type="button"
        aria-label="Навигация"
        onClick={onNavOpen}
      >
        <hr className="navigation__toggle-line"></hr>
        <hr className="navigation__toggle-line"></hr>
        <hr className="navigation__toggle-line"></hr>
      </button>
      <div className={containerClassName}>
        <button
          className="app__button navigation__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onNavClose}
        >
          <hr className="navigation__close-button-line"></hr>
          <hr className="navigation__close-button-line"></hr>
        </button>
        {isLogged && (
          <ul className="navigation__links">
            <li className="navigation__link-container navigation__link-container_main">
              <Link
                to="/"
                aria-label="Главная"
                className={generateClassName("/")}
              >
                Главная
              </Link>
            </li>
            <li className="navigation__link-container">
              <Link
                to="/movies"
                aria-label="Фильмы"
                className={generateClassName("/movies")}
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation__link-container">
              <Link
                to="/saved-movies"
                className={generateClassName("/saved-movies")}
                aria-label="Сохраненные фильмы"
              >
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
        )}

        {isLogged ? (
          <button
            className="app__button navigation__profile-button"
            type="button"
            aria-label="Профиль"
            onClick={() => {
              history.push("/profile");
            }}
          >
            Аккаунт
            <img
              className="navigation__profile-button-icon"
              alt="Иконка"
              src={icon}
            />
          </button>
        ) : (
          <div className="navigation__auth-container">
            <Link
              to="/signup"
              className="navigation__link app__button"
              aria-label="Регистрация"
            >
              Регистрация
            </Link>
            <button
              className="navigation__login-button app__button"
              aria-label="Вход"
              type="button"
              onClick={() => {
                history.push("/signin");
              }}
            >
              Войти
            </button>
          </div>
        )}
      </div>
    </div>
  );
}