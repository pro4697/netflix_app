import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

function Movie({ title, _date, overview, _poster, vote, genres }) {
  const poster = `${IMG_PATH}${_poster}`;
  const date = _date.split('-');
  return (
    <div className='movie'>
      <Link
        to={{
          pathname: '/movie-detail',
          state: { title, date, overview, poster, vote, genres },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className='movie__data'>
          <h3 className='movie__title'>{title}</h3>
          <div className='movie__year'>{date[0]}</div>
          <div className='movie__star'>
            <i class='fa fa-star' />
            {vote}
          </div>
          {/* <ul className='movie__genres'>
            {genres.map((genre, index) => {
              return (
                <li key={index} className='movie__genre'>
                  {genre}
                </li>
              );
            })}
          </ul> */}
          {/* <p className='movie__summary'>{overview.slice(0, 180)}...</p> */}
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  // 타입 체크
  title: PropTypes.string.isRequired,
  _date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  _poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Movie;
