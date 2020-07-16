import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from '../imgs/netflix_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <div>
      <div className='nav__top'>
        <Link to='/'>
          <div className='nav__top__logo'>
            <img src={Logo} alt='logo' className='nav__top__logo'></img>
          </div>
        </Link>
      </div>

      <div className='nav__bottom'>
        <div className='nav__bottom__content'>
          <Link to='/'>
            <FontAwesomeIcon icon={faFilm} className='nav__icon' />
          </Link>
        </div>
        <div className='nav__bottom__content'>
          <Link to='/about'>
            <FontAwesomeIcon icon={faTv} className='nav__icon' />
          </Link>
        </div>
        <div className='nav__bottom__content'>
          <Link to='/about'>
            <FontAwesomeIcon icon={faSearch} className='nav__icon' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
