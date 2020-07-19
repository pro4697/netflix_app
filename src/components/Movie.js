import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Movie({ id, title, date, overview, poster, backdrop, vote, isTv }) {
  //const date = _date.split('-');
  //const pattern_eng = /[a-zA-Z]/;
  // 영어 21 한글 10

  return (
    <div className='movie'>
      <Link
        to={{
          pathname: '/movie-detail',
          state: { id, title, date, overview, poster, backdrop, vote, isTv },
        }}
      >
        {poster !== 'https://image.tmdb.org/t/p/w500null' ? (
          <div
            className='movie__poster'
            style={{ backgroundImage: `url(${poster})` }}
          />
        ) : null}
        <div className='movie__data'>
          <h3 className='movie__title'>{title}</h3>
          <div className='movie__year'>{date.split('-')[0]}</div>
          <div className='movie__vote'>
            <FontAwesomeIcon icon={faStar} className='movie__star' />
            {vote}
          </div>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  isTv: PropTypes.bool.isRequired,
};

export default Movie;
