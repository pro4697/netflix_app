import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

function Movie({ title, _date, overview, poster, backdrop, vote, genres }) {
  const date = _date.split('-');
  const pattern_eng = /[a-zA-Z]/;

  // 영어 21 한글 10
  return (
    <div className='movie'>
      <Link
        to={{
          pathname: '/movie-detail',
          state: { title, date, overview, poster, backdrop, vote, genres },
        }}
      >
        <div
          className='movie__poster'
          style={{ backgroundImage: `url(${poster})` }}
        />
        <div className='movie__data'>
          <h3 className='movie__title'>
            {title}
            {/* {pattern_eng.test(title)
              ? title.length > 16
                ? title.slice(0, 16) + '...'
                : title.slice(0, 16) + 'ㅤ'
              : title.length > 9
              ? title.slice(0, 9) + '...'
              : title.slice(0, 9) + 'ㅤ'} */}
          </h3>
          <div className='movie__year'>{date[0]}</div>
          <div className='movie__star'>
            <i className='fa fa-star' />
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
  poster: PropTypes.string.isRequired,
  backdrop: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Movie;
