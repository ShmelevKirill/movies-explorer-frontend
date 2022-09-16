import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__date">&copy; 2022</p>
        <ul className="footer__links">
          <li className="footer__link-container">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              aria-label="Яндекс.Практикум"
              className="footer__link app__button" rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link-container">
            <a
              href="https://github.com/ShmelevKirill"
              target="_blank"
              aria-label="GitHub"
              className="footer__link app__button" rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}