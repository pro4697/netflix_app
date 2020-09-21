import React from 'react';
import { Link } from 'react-router-dom';
import './NavTop.css';
import Logo from '../imgs/netflix_logo.png';

const NavTop = () => {
  return (
    <div>
      <div className='nav__top'>
        <Link to='/'>
          <div className='nav__top__logo'>
            <img src={Logo} alt='logo' className='nav__top__logo'></img>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavTop;
