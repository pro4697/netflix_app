import React from 'react';
import Movie from './components/Movie';
import Panel from './components/Panel';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export const utils = {
  Movie_render(props) {
    return props.map((movie) => (
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title || movie.name}
        date={movie.release_date || movie.first_air_date}
        overview={movie.overview}
        poster={IMG_PATH + movie.poster_path}
        backdrop={IMG_PATH + movie.backdrop_path}
        vote={movie.vote_average}
        isTv={movie.title ? false : true}
      />
    ));
  },

  Panel_render(props) {
    return props.map((movie) => (
      <Panel
        key={movie.id}
        id={movie.id}
        title={movie.title}
        date={movie.release_date}
        overview={movie.overview}
        poster={IMG_PATH + movie.poster_path}
        backdrop={IMG_PATH + movie.backdrop_path}
        vote={movie.vote_average}
      />
    ));
  },

  overview_replace(movie, overview) {
    for (var i = 0; i < movie.length; i++)
      if (movie[i].overview.length < 10)
        movie[i].overview = overview[i].overview;
  },

  format_date(date) {
    const _date = date.split('-');
    return `${_date[0]}. ${_date[1]}. ${_date[2]}.`;
  },
};
