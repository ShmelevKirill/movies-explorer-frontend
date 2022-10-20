import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  filteredMovies,
  filteredCards,
  handleMore,
  isMore,
  likeFilm,
  deleteFilm,
  savedMovies,
}) {
  return (
    <section className="movies">
      <div className="movies__container content__container">
        {filteredMovies.length > 0 ? (
          <>
            <ul className="movies__list">
              {filteredCards.map((movie) => {
                return (
                  <MoviesCard
                    key={movie.id}
                    card={movie}
                    likeFilm={likeFilm}
                    deleteFilm={deleteFilm}
                    savedMovies={savedMovies}
                  />
                );
              })}
            </ul>
            {isMore && (
              <button
                className="movies__btn"
                type="button"
                onClick={handleMore}
              >
                Ещё
              </button>
            )}
          </>
        ) : (
          <div className="movies__nothing">Ничего не найдено</div>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;