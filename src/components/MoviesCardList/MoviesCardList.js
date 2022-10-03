import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import { useState } from 'react';

function MoviesCardList({
  place,
  moviesToRender,
  mySavedMovies,
  handleMovieSave,
  handleMovieDelete,
}) {
  const [showMovies, setShowMovies] = useState(4);
  function handleMore() {
    setShowMovies(Math.min(moviesToRender.length, showMovies + 4));
  }

  const idsOfMySavedMovies = {};
  if (place === 'all-movies') {
    for (const movie of mySavedMovies) {
      idsOfMySavedMovies[movie.movieId] = true;
    }
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
      {moviesToRender &&
        moviesToRender.slice(0, showMovies).map((movie) => {
          let isSaved;
          switch (place) {
            case 'all-movies':
              if (idsOfMySavedMovies[movie.id]) {
                isSaved = true;
              } else {
                isSaved = false;
              }
              break;
            case 'saved-movies':
              isSaved = true;
              break;
            default:
              console.error('Что-то пошло не так.');
              break;
          }

          return (
            <MoviesCard
              movieData={movie}
              place={place}
              isSaved={isSaved}
              key={movie.id || movie.movieId}
              handleMovieDelete={handleMovieDelete}
              handleMovieSave={handleMovieSave}
            />
          );
        })}

      {moviesToRender && moviesToRender.length > showMovies && (
        <button
          className="app__button movies-card-list__more-button"
          type="button"
          onClick={handleMore}
        >
          Ещё
        </button>
      )}
      </div>
    </section>
  );
}

export default MoviesCardList;