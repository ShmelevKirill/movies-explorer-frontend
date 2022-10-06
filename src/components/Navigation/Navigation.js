import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation({ loggedIn, isMain }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function openMenu() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }

  return (
    <div className="navigation">
      {loggedIn ? (
        <>
          <button
            className={`navigation__btn-burger ${
              isMain ? "navigation__btn-burger_color_white" : ""
            }`}
            type="button"
            onClick={openMenu}
          ></button>
          <div
            className={`navigation__menu-background ${
              isMenuOpened ? "navigation__menu-background_opened" : ""
            }`}
          ></div>
          <div
            className={`navigation__menu ${
              isMenuOpened ? "navigation__menu_opened" : ""
            }`}
          >
            <button
              className="navigation__btn-close"
              onClick={closeMenu}
              type="button"
            ></button>
            <nav className="navigation__nav_name_auth">
              <ul className="navigation__list_name_auth">
                <li className="navigation__item_name_auth">
                  <NavLink
                    exact
                    to="/"
                    className={`navigation__link_name_auth ${
                      isMain ? "navigation__link_color_white" : ""
                    }`}
                    activeClassName="navigation__link_active"
                    onClick={closeMenu}
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="navigation__item_name_auth">
                  <NavLink
                    to="/movies"
                    className={`navigation__link_name_auth ${
                      isMain ? "navigation__link_color_white" : ""
                    }`}
                    activeClassName="navigation__link_active"
                    onClick={closeMenu}
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="navigation__item_name_auth">
                  <NavLink
                    to="/saved-movies"
                    className={`navigation__link_name_auth ${
                      isMain ? "navigation__link_color_white" : ""
                    }`}
                    activeClassName="navigation__link_active"
                    onClick={closeMenu}
                  >
                    Сохраненные фильмы
                  </NavLink>
                </li>
              </ul>
              <NavLink
                to="/profile"
                className={`navigation__btn_name_auth ${
                  isMain ? "navigation__btn_color_white" : ""
                }`}
                onClick={closeMenu}
              >
                <svg
                  className="navigation__img_name_auth"
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`navigation__path_name_auth ${
                      isMain ? "navigation__path_color_white" : ""
                    }`}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4C8 5.10457 7.10457 6 6 6C4.89543 6 4 5.10457 4 4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4ZM10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0C8.20914 0 10 1.79086 10 4ZM4 9C1.79086 9 0 10.7909 0 13V14H2V13C2 11.8954 2.89543 11 4 11H8C9.10457 11 10 11.8954 10 13V14H12V13C12 10.7909 10.2091 9 8 9H4Z"
                    fill="black"
                  />
                </svg>
                Аккаунт
              </NavLink>
            </nav>
          </div>
        </>
      ) : (
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                to="/signup"
                className={`navigation__link ${
                  !isMain ? "navigation__link_color_black" : ""
                }`}
              >
                Регистрация
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/signin" className="navigation__btn">
                Войти
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}