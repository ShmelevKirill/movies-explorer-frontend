import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="app">
        <Switch>
        <Route path="/signup">
            <Header theme="light" positionStyle="auth" isLogged={loggedIn} />
            <Register />
          </Route>

          <Route path="/signin">
            <Header theme="light" positionStyle="auth" isLogged={loggedIn} />
            <Login />
          </Route>

          <Route path="/profile">
            <Header theme="light" positionStyle="main" isLogged={loggedIn} />
            <Profile />
          </Route>

          <Route exact path="/">
            <Header theme="color" positionStyle="main" isLogged={loggedIn} />
            <Main />
            <Footer />
          </Route>

          <Route path="/movies">
            <Header theme="light" positionStyle="main" isLogged={loggedIn} />
            <Movies />
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header theme="light" positionStyle="main" isLogged={loggedIn} />
            <SavedMovies />
            <Footer />
          </Route>
          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
  );
}

export default App;