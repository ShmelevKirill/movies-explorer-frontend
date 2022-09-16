import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__section-title">Портфолио</h4>
      <ul className="portfolio__items">
        <li className="portfolio__item app__button">
          <a
            href="https://github.com/ShmelevKirill/how-to-learn"
            target="_blank"
            aria-label="Статичный сайт"
            className="portfolio__item-name" rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            href="https://github.com/ShmelevKirill/how-to-learn"
            target="_blank"
            aria-label="Статичный сайт"
            className="portfolio__item-pic" rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__item app__button">
          <a
            href="https://github.com/ShmelevKirill/russian-travel"
            target="_blank"
            aria-label="Адаптивный сайт"
            className="portfolio__item-name" rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            href="https://github.com/ShmelevKirill/russian-travel"
            target="_blank"
            aria-label="Адаптивный сайт"
            className="portfolio__item-pic" rel="noreferrer"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__item app__button">
          <a
            href="https://github.com/ShmelevKirill/react-mesto-api-full"
            target="_blank"
            aria-label="Одностраничное приложение"
            className="portfolio__item-name" rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            href="https://github.com/ShmelevKirill/react-mesto-api-full"
            target="_blank"
            aria-label="Одностраничное приложение"
            className="portfolio__item-pic" rel="noreferrer"
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}
