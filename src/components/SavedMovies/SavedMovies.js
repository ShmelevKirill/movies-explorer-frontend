import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect } from "react";

function SavedMovies({
  savedMovies,
  filteredSavedMovies,
  deleteFilm,
  searchSavedFilms,
  setIsSuccess,
  setMessageInfo,
  setIsOpen,
}) {
  useEffect(() => {
    searchSavedFilms("", false);
  }, []);

  return (
    <>
      <SearchForm
        searchFilms={searchSavedFilms}
        setIsSuccess={setIsSuccess}
        setMessageInfo={setMessageInfo}
        setIsOpen={setIsOpen}
      />
      <MoviesCardList
        filteredMovies={filteredSavedMovies}
        filteredCards={filteredSavedMovies}
        deleteFilm={deleteFilm}
        savedMovies={savedMovies}
      />
    </>
  );
}

export default SavedMovies;