import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { amountCardsForPage } from "../../configs/constants";
import { useEffect, useState } from "react";

function Movies({
  isSearch,
  searchFilms,
  filteredMovies,
  setFilteredMovies,
  setIsSearch,
  setIsSuccess,
  setMessageInfo,
  setIsOpen,
  likeFilm,
  deleteFilm,
  savedMovies,
  filteredCards,
  setFilteredCards,
}) {
  // Размер окна
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  // Количество карточек
  const [amountCards, setAmountCards] = useState(16);
  const [amountMoreCards, setAmountMoreCards] = useState(4);
  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isSearch") !== null) {
      setIsSearch(JSON.parse(localStorage.getItem("isSearch")));
      setFilteredMovies(JSON.parse(localStorage.getItem("filteredMovies")));
    }
    window.addEventListener("resize", changeWidthWindow);
    return () => {
      window.removeEventListener("resize", changeWidthWindow);
    };
  }, []);

  useEffect(() => {
    changeAmountsCards();
  }, [widthWindow]);

  useEffect(() => {
    setFilteredCards(filteredMovies.slice(0, amountCards));
    if (amountCards < filteredMovies.length) {
      setIsMore(true);
    } else {
      setIsMore(false);
    }
  }, [filteredMovies, amountCards]);

  function changeWidthWindow() {
    setTimeout(() => {
      setWidthWindow(window.innerWidth);
    }, 1000);
  }

  function changeAmountsCards() {
    switch (true) {
      case widthWindow < 768:
        setAmountCards(amountCardsForPage.xs.cards);
        setAmountMoreCards(amountCardsForPage.xs.more);
        break;

      case widthWindow < 1024:
        setAmountCards(amountCardsForPage.s.cards);
        setAmountMoreCards(amountCardsForPage.s.more);
        break;

      case widthWindow < 1200:
        setAmountCards(amountCardsForPage.m.cards);
        setAmountMoreCards(amountCardsForPage.m.more);
        break;

      default:
        setAmountCards(amountCardsForPage.l.cards);
        setAmountMoreCards(amountCardsForPage.l.more);
        break;
    }
  }

  function handleMore() {
    const newAmount = filteredCards.length + amountMoreCards;
    setFilteredCards(filteredMovies.slice(0, newAmount));
    if (newAmount >= filteredMovies.length) {
      setIsMore(false);
    }
  }

  return (
    <>
      <SearchForm
        searchFilms={searchFilms}
        setIsSuccess={setIsSuccess}
        setMessageInfo={setMessageInfo}
        setIsOpen={setIsOpen}
      />
      {isSearch ? (
        <MoviesCardList
          filteredMovies={filteredMovies}
          filteredCards={filteredCards}
          handleMore={handleMore}
          isMore={isMore}
          likeFilm={likeFilm}
          deleteFilm={deleteFilm}
          savedMovies={savedMovies}
        />
      ) : (
        <div className="content__info-block">
          <p className="content__info-text">Начните поиск фильмов</p>
        </div>
      )}
    </>
  );
}

export default Movies;