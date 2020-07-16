import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Panel.css';

function Panel({ title, _date, overview, poster, backdrop, vote, genres }) {
  const date = _date.split('-');
  return (
    <div className='flicking__container'>
      <div
        className='flicking__backdrop'
        style={{ backgroundImage: `url(${backdrop})` }}
      />
      <div className='flicking__content'>
        <div
          className='flicking__poster'
          style={{ backgroundImage: `url(${poster})` }}
        />
        <div className='flicking__data'>
          <div className='flicking__title'>{title.slice(0, 40)}</div>
          <div className='flicking__vote'>
            <FontAwesomeIcon icon={faStar} className='panel__star' />
            <span> {vote} / 10</span>
          </div>
          <div className='flicking__overview'>{overview.slice(0, 50)}...</div>
          <Link
            to={{
              pathname: '/movie-detail',
              state: { title, date, overview, poster, backdrop, vote, genres },
            }}
          >
            <div className='flicking__button'>View details</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  _date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Panel;
