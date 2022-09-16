import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';


function Header(isTheme) {
  return (
    <header className={`header ${isTheme && 'header__theme'}`}>
      <Link to='/' className='header__logo-link'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </Link>
      <nav className="header__nav">
        <button className='header__reg'>Регистрация</button>
        <button className='header__login'>Войти</button>
      </nav>
     
    </header>
  );
}

export default Header;