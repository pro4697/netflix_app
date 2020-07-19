import React from 'react';
import { Link } from 'react-router-dom';
import './NavBottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';

function NavBottom() {
  return (
    <div className='nav__bottom'>
      <div className='nav__bottom__content'>
        <Link to='/'>
          <FontAwesomeIcon icon={faFilm} className='nav__icon' />
        </Link>
      </div>
      <div className='nav__bottom__content'>
        <Link to='/tv'>
          <FontAwesomeIcon icon={faTv} className='nav__icon' />
        </Link>
      </div>
      <div className='nav__bottom__content'>
        <Link to='/search'>
          <FontAwesomeIcon icon={faSearch} className='nav__icon' />
        </Link>
      </div>
    </div>
  );
}

export default NavBottom;
