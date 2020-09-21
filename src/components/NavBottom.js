import React from 'react';
import { Link } from 'react-router-dom';
import './NavBottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBottom = ({ props }) => {
  return (
    <div className='nav__bottom'>
      <div className='nav__bottom__content'>
        <Link to='/'>
          <FontAwesomeIcon
            icon={faFilm}
            className='nav__icon'
            style={{ color: props[0] }}
          />
        </Link>
      </div>
      <div className='nav__bottom__content'>
        <Link to='/tv'>
          <FontAwesomeIcon
            icon={faTv}
            className='nav__icon'
            style={{ color: props[1] }}
          />
        </Link>
      </div>
      <div className='nav__bottom__content'>
        <Link to='/search'>
          <FontAwesomeIcon
            icon={faSearch}
            className='nav__icon'
            style={{ color: props[2] }}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBottom;
