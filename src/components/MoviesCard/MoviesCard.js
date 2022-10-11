import React from "react";
import "./MoviesCard.css";
export default function MoviesCard({ name, timing, poster, isSaved }) {
  const buttonClass =
    "app__button movies-card__save-button " +
    (isSaved === "true"
      ? "movies-card__save-button_mode_saved"
      : "movies-card__save-button_mode_unsaved");
  return (
    <article className="movies-card">
      <img className="movies-card__poster app__button" src={poster} alt={`Постер фильма "${name}"`}></img>
      <div className="movies-card__info">
        <h4 className="movies-card__name app__button"> {name}</h4>
        <button className={buttonClass} type="button"></button>
      </div>
      <p className="movies-card__time">{timing}</p>
    </article>
  );
}