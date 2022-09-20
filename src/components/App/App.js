import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Navigation from "../Navigation/Navigation";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import * as auth from "../../utils/Auth.js";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <div className="app">
        <Switch>
          <Route exact path="/">
            <Header theme="color" positionStyle="main" isLogged={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header theme="light" positionStyle="main" isLogged={loggedIn} />

            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header theme="light" positionStyle="main" isLogged={loggedIn} />

            <Footer />
          </Route>
          <Route path="/profile">
            <Header theme="light" positionStyle="main" isLogged={loggedIn} />

          </Route>
          <Route path="/signin">
            <Header theme="light" positionStyle="auth" isLogged={loggedIn} />

          </Route>
          <Route path="/signup">
            <Header theme="light" positionStyle="auth" isLogged={loggedIn} />
            <Register />
          </Route>
          <Route path="*">
          <NotFound />
          </Route>
        </Switch>
      </div>
      // </CurrentUserContext.Provider>
  );
}

export default App;