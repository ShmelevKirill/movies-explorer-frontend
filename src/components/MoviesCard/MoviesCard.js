import React, { useState } from "react";
import "./MoviesCard.css";
export default function MoviesCard({ id, name, timing, poster, trailerLink, _id, onMovieSave, }) {
  const [isSaved, setIsSaved] = useState(_id && true);

  const buttonClass =
    "app__button movies-card__save-button " +
    (isSaved
      ? "movies-card__save-button_mode_saved"
      : "movies-card__save-button_mode_unsaved");
  function handleSaveClick() {
    onMovieSave(isSaved ? _id : undefined, id)
    .then((res)=>{
      if (res)
      {
        setIsSaved(!isSaved);
      }
    });
  }

  return (
    <article className="movies-card">
      <a
        className="movies-card__trailer-link app_button"
        href={trailerLink}
        target="_blank"
        aria-label="Посмотреть трейлер"
        rel="noreferrer"
      >
      <img 
        className="movies-card__poster app__button" 
        src={poster} 
        alt={`Постер фильма "${name}"`}
      >
      </img>
      </a>
      <div className="movies-card__info">
        <h4 className="movies-card__name app__button"> {name}</h4>
        <button className={buttonClass} type="button" onClick={handleSaveClick}></button>
      </div>
      <p className="movies-card__time">{`${timing} минут`}</p>
    </article>
  );
}