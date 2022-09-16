import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info-container">
        <div className="about-project__card">
          <h3 className="about-project__card-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__card-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__card">
          <h3 className="about-project__card-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__card-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time-line">
        <p className="about-project__time-span about-project__time-span_theme_green">
          1 неделя
        </p>
        <p className="about-project__time-span about-project__time-span_theme_light">
          4 недели
        </p>
        <p className="about-project__time-name">Back-end</p>
        <p className="about-project__time-name">Front-end</p>
      </div>
    </section>
  );
}