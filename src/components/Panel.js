import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Panel.css';

function Panel({ id, title, _date, overview, poster, backdrop, vote }) {
  const date = _date.split('-');
  return (
    <div className='panel__container'>
      <div
        className='panel__backdrop'
        style={{ backgroundImage: `url(${backdrop})` }}
      />
      <div className='panel__content'>
        <div
          className='panel__poster'
          style={{ backgroundImage: `url(${poster})` }}
        />
        <div className='panel__data'>
          <div className='panel__title'>{title.slice(0, 40)}</div>
          <div className='panel__vote'>
            <FontAwesomeIcon icon={faStar} className='panel__star' />
            <span> {vote} / 10</span>
          </div>
          <div className='panel__overview'>{overview.slice(0, 50)}...</div>
          <Link
            to={{
              pathname: '/movie-detail',
              state: { id, title, date, overview, poster, backdrop, vote },
            }}
          >
            <div className='panel__button'>View Detail</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

Panel.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  _date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default Panel;
