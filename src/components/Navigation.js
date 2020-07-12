import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from './netflix_logo.png';
import 'font-awesome/css/font-awesome.min.css';

function Navigation() {
  return (
    <div>
      <div className='nav__top'>
        <Link to='/'>
          <div class='nav__top__logo'>
            <img src={Logo} class='nav__top__logo'></img>
          </div>
        </Link>
      </div>

      <div className='nav__bottom'>
        <div className='nav__bottom__content'>
          <Link to='/'>
            <i className='fa fa-film'></i>
          </Link>
        </div>
        <div className='nav__bottom__content'>
          <Link to='/about'>
            <i class='fa fa-tv'></i>
          </Link>
        </div>
        <div className='nav__bottom__content'>
          <Link to='/about'>
            <i class='fa fa-search'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
