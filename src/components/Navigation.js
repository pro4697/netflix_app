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
          <div className='nav__top__logo'>
            <img src={Logo} alt='logo' className='nav__top__logo'></img>
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
            <i className='fa fa-tv'></i>
          </Link>
        </div>
        <div className='nav__bottom__content'>
          <Link to='/about'>
            <i className='fa fa-search'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
