import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import NoImg from '../imgs/no_img.png';

function Movie({ id, title, date, overview, poster, backdrop, vote, isTv }) {
  if (date === undefined) date = '0000-00-00';
  //const date = _date.split('-');
  //const pattern_eng = /[a-zA-Z]/;
  // 영어 21 한글 10

  return (
    <div className='movie'>
      <Link
        to={{
          pathname: '/movie-detail',
          state: {
            id,
            title,
            date,
            overview,
            poster,
            backdrop,
            vote,
            isTv,
          },
        }}
      >
        <picture>
          {poster !== 'https://image.tmdb.org/t/p/w500null' ? (
            <img
              src={poster}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = NoImg;
              }}
              className='movie__poster'
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <img
              src={NoImg}
              alt={title}
              className='movie__poster'
              style={{ objectFit: 'cover' }}
            />
          )}
        </picture>
        <div className='movie__data'>
          <h3 className='movie__title'>{title}</h3>
          <div className='movie__year'>{date.slice(0, 4)}</div>
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
