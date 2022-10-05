import { NavLink, useRouteMatch } from 'react-router-dom';
import './Header.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import SignButtons from '../SignButtons/SignButtons';

export default function Header({ isNavigation }) {

  const isMain = useRouteMatch({ path: "/", exact: true });

  return (
    <header className={`header ${isMain ? 'header_theme_color' : ''}`}>
      <NavLink to='/' className='header__home'>
        <Logo className='header__logo' />
      </NavLink>
      {isNavigation && <Navigation />}
      {!isNavigation && <SignButtons />}
    </header>
  );
}

