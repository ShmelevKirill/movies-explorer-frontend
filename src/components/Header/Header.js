import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

export default function Header({ theme, positionStyle }) {
// const headerClassName = 'header' + 'header_theme_' + theme + 'header_style_' + 
//   positionStyle;
  return (
    <header className='header header_theme_color'>
      <Link to={'/'}>
        <img className='header__logo app__button' src={logo} alt='Логотип'></img>
      </Link>
      <nav className="header__nav">
        <button className='header__reg app__button'>Регистрация</button>
        <button className='header__login app__button'>Войти</button>
      </nav>
     
    </header>
  );
}

