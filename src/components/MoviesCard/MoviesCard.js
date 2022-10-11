import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function MoviesCard({ card, likeFilm, deleteFilm, savedMovies }) {
  const { pathname } = useLocation();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    savedMovies.map((movie) => {
      if (card.id === movie.id) {
        setIsLiked(true);
      }
    });
  }, [savedMovies]);

  function handleDeleteFilm() {
    deleteFilm(card.id);
  }

  function toggleLike() {
    if (isLiked) {
      handleDeleteFilm();
      setIsLiked(false);
    } else {
      likeFilm(card);
      setIsLiked(true);
    }
  }

  function getTimeFromMins(mins) {
    return `${Math.trunc(mins / 60)}ч ${mins % 60}м`;
  }

  return (
    <li className="movie">
      <a href={card.trailerLink}>
        <img
          className="movie__img"
          src={`https://api.nomoreparties.co/${card.image.url}`}
          alt={card.nameRU}
        />
      </a>
      <div className="movie__block">
        <h2 className="movie__title">
          <a className="movie__link" href={card.trailerLink}>
            {card.nameRU}
          </a>
        </h2>
        {pathname === "/movies" ? (
          <button className="movie__btn" onClick={toggleLike} type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#F9F9F9" />
              <path
                d="M14.2727 8C13.2727 8 12.5455 8.52308 12 9.08974C11.4545 8.56667 10.7273 8 9.72727 8C8.13636 8 7 9.2641 7 10.8333C7 11.6179 7.31818 12.3154 7.90909 12.7949L12 16.5L16.0909 12.7949C16.6364 12.2718 17 11.6179 17 10.8333C17 9.2641 15.8636 8 14.2727 8Z"
                fill={isLiked ? "#EE3465" : "white"}
              />
            </svg>
          </button>
        ) : (
          <button
            className="movie__btn"
            onClick={handleDeleteFilm}
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#F9F9F9" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.001 13.0605L14.6525 15.7121L15.7132 14.6514L13.0616 11.9999L15.7131 9.34844L14.6524 8.28778L12.001 10.9392L9.34923 8.28748L8.28857 9.34814L10.9403 11.9999L8.28846 14.6517L9.34912 15.7124L12.001 13.0605Z"
                fill="black"
              />
            </svg>
          </button>
        )}
      </div>
      <p className="movie__time">{getTimeFromMins(card.duration)}</p>
    </li>
  );
}

export default MoviesCard;