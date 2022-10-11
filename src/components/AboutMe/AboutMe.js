import React from "react";
import "./AboutMe.css";
import studentPhoto from "../../images/student-photo.JPG";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__section-title">Студент</h2>
      <div className="about-me__student-card">
        <img
          className="about-me__photo"
          src={studentPhoto}
          alt="Фото студента"
        ></img>
        <div className="about-me__info-container">
          <h3 className="about-me__name">Шмелёв Кирилл</h3>
          <p className="about-me__job">Веб-разработчик, 35 лет</p>
          <p className="about-me__description">
            Я родился и живу в Москве. У меня среднее техническое и высшее экономическое образование.
            Люблю музыку и путешествия, коллекционирую виниловые пластинки.
            В 2021 году начал изучать Веб-разработку. В данный момент пишу диплом
            и начинаю поиски работы.
          </p>
        </div>
        <ul className="about-me__links">
          <li>
            <a
              href="https://github.com/ShmelevKirill"
              target="_blank"
              className="about-me__link app__button" rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

