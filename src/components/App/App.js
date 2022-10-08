import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { durationShortFilm } from "../../configs/constants";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  errors,
  errorsRegister,
  errorsLogin,
  errorsUpdate,
} from "../../configs/errors";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState("");

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });

  const [isSearch, setIsSearch] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);

  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((data) => {
          getSavedFilms(data._id);
          return setCurrentUser(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn && (pathname === "/signin" || pathname === "/signup")) {
      history.push("/movies");
    }
    setIsError(false);
  }, [loggedIn, history, pathname]);

  useEffect(() => {
    checkToken();
  }, []);

  function closeInfoPopup() {
    setIsOpen(false);
  }

  function handleEdit() {
    setIsEdit(true);
  }

  function createError(errorsList, err) {
    if (errorsList[err] !== undefined) {
      setErrorMessage(errorsList[err]);
    } else {
      setErrorMessage(errors[500]);
    }
    setIsError(true);
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    mainApi
      .authorize({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
      })
      .catch((err) => {
        createError(errorsLogin, err.status);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    mainApi
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email: email, password: password });
      })
      .catch((err) => {
        createError(errorsRegister, err.status);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("valueSearch");
    localStorage.removeItem("isShortFilm");
    localStorage.removeItem("isSearch");
    localStorage.removeItem("filteredMovies");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("movies");

    setIsSearch(false);
    setLoggedIn(false);
    setFilteredMovies([]);
    setFilteredCards([]);
    setSavedMovies([]);

    setCurrentUser({
      name: "",
      email: "",
      _id: "",
    });

    history.push("/");
  }

  function checkToken() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
          history.push(pathname);
        })
        .catch((err) => {
          handleLogout();
          console.log(`Ошибка: ${err}`);
        });
    }
  }

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);

    mainApi
      .setUserInfo(newUserInfo)
      .then((data) => {
        setCurrentUser(data);
        setIsEdit(false);
        setIsSuccess(true);
        setMessageInfo("Данные профиля обновлены");
        setIsOpen(true);
      })
      .catch((err) => {
        createError(errorsUpdate, err.status);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function filteredAllMovies(movies, regex, isShortFilm) {
    setIsSearch(true);
    localStorage.setItem("isSearch", JSON.stringify(true));

    if (isShortFilm) {
      setFilteredMovies(
        movies.filter(
          (card) => regex.test(card.nameRU) && card.duration < durationShortFilm
        )
      );
      localStorage.setItem(
        "filteredMovies",
        JSON.stringify(
          movies.filter(
            (card) =>
              regex.test(card.nameRU) && card.duration < durationShortFilm
          )
        )
      );
    } else {
      setFilteredMovies(movies.filter((card) => regex.test(card.nameRU)));
      localStorage.setItem(
        "filteredMovies",
        JSON.stringify(movies.filter((card) => regex.test(card.nameRU)))
      );
    }
  }

  function searchFilms(filmName, isShortFilm) {
    const regex = new RegExp(filmName, "i");

    if (JSON.parse(localStorage.getItem("movies")) === null) {
      setIsLoading(true);
      moviesApi
        .getAllFilms()
        .then((data) => {
          localStorage.setItem("movies", JSON.stringify(data));
          filteredAllMovies(data, regex, isShortFilm);
        })
        .catch((err) => {
          setIsSuccess(false);
          setMessageInfo(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного или попробуйте ещё раз"
          );
          setIsOpen(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filteredAllMovies(
        JSON.parse(localStorage.getItem("movies")),
        regex,
        isShortFilm
      );
    }
  }

  function searchSavedFilms(filmName, isShortFilm) {
    const regex = new RegExp(filmName, "i");

    setFilteredSavedMovies(
      savedMovies.filter((card) => regex.test(card.nameRU))
    );

    if (isShortFilm) {
      setFilteredSavedMovies(
        savedMovies.filter((card) => card.duration < durationShortFilm)
      );
    }
  }

  function getSavedFilms(userId) {
    mainApi
      .getAllFilms()
      .then((data) => {
        setSavedMovies(data.filter((card) => card.owner === userId));
        localStorage.setItem(
          "savedMovies",
          JSON.stringify(data.filter((card) => card.owner === userId))
        );

        setFilteredSavedMovies(data.filter((card) => card.owner === userId));
      })
      .catch((err) => console.log(err));
  }

  function likeFilm(card) {
    mainApi
      .addNewFilm(card)
      .then((card) => {
        setSavedMovies([...savedMovies, card]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([...savedMovies, card])
        );
      })
      .catch((err) => console.log(err));
  }

  function deleteFilm(cardId) {
    savedMovies.map((movie) => {
      if (movie.id === cardId) {
        mainApi
          .deleteMovie(movie._id)
          .then((res) => {
            setSavedMovies(savedMovies.filter((card) => card.id !== cardId));
            localStorage.getItem(
              "savedMovies",
              savedMovies.filter((card) => card.id !== cardId)
            );
            setFilteredSavedMovies(
              filteredSavedMovies.filter((card) => card.id !== cardId)
            );
          })
          .catch((err) => console.log(err));
      }
    });
  }

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <div className="page">
          <Header loggedIn={loggedIn} />

          <main className="content">
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>

              <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                <Movies
                  isSearch={isSearch}
                  searchFilms={searchFilms}
                  filteredMovies={filteredMovies}
                  setFilteredMovies={setFilteredMovies}
                  setIsSearch={setIsSearch}
                  setIsSuccess={setIsSuccess}
                  setMessageInfo={setMessageInfo}
                  setIsOpen={setIsOpen}
                  likeFilm={likeFilm}
                  deleteFilm={deleteFilm}
                  savedMovies={savedMovies}
                  filteredCards={filteredCards}
                  setFilteredCards={setFilteredCards}
                />
              </ProtectedRoute>

              <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
                <SavedMovies
                  savedMovies={savedMovies}
                  filteredSavedMovies={filteredSavedMovies}
                  deleteFilm={deleteFilm}
                  searchSavedFilms={searchSavedFilms}
                  setIsSuccess={setIsSuccess}
                  setMessageInfo={setMessageInfo}
                  setIsOpen={setIsOpen}
                />
              </ProtectedRoute>

              <ProtectedRoute path="/profile" loggedIn={loggedIn}>
                <Profile
                  handleLogout={handleLogout}
                  onSubmit={handleUpdateUser}
                  isError={isError}
                  errorMessage={errorMessage}
                  user={currentUser}
                  isEdit={isEdit}
                  handleEdit={handleEdit}
                  setIsEdit={setIsEdit}
                />
              </ProtectedRoute>

              <Route path="/signin">
                <Login
                  onSubmit={handleLogin}
                  isError={isError}
                  errorMessage={errorMessage}
                />
              </Route>

              <Route path="/signup">
                <Register
                  onSubmit={handleRegister}
                  isError={isError}
                  errorMessage={errorMessage}
                />
              </Route>

              <Route path="*">
                <NotFound history={history} />
              </Route>
            </Switch>
          </main>

          <Footer />

          <Preloader isLoading={isLoading} />

          <InfoTooltip
            isSuccess={isSuccess}
            message={messageInfo}
            isOpen={isOpen}
            onClose={closeInfoPopup}
          />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;