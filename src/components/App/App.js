import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Navigation from "../Navigation/Navigation";

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
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
          </Route>
        </Switch>
      </div>
  );
}

export default App;