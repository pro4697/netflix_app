import React, { useEffect, useState } from 'react';
import { utils } from '../utils';
import { movieApi } from '../Api';
import Home from './HomeRender';

export default () => {
  const [movies, setMovies] = useState({
    isLoading: true,
    nowPlaying: [],
    topRated: [],
    popular: [],
    upComing: [],
  });

  const getData = async () => {
    const {
      data: { results: nowPlaying },
    } = await movieApi.nowPlaying();

    const {
      data: { results: overview1 },
    } = await movieApi.nowPlayingUS();
    utils.overview_replace(nowPlaying, overview1);

    const {
      data: { results: topRated },
    } = await movieApi.topRated();

    const {
      data: { results: overview2 },
    } = await movieApi.topRatedUS();
    utils.overview_replace(topRated, overview2);

    const {
      data: { results: popular },
    } = await movieApi.popular();

    const {
      data: { results: overview3 },
    } = await movieApi.popularUS();
    utils.overview_replace(popular, overview3);

    const {
      data: { results: upComing },
    } = await movieApi.upComing();

    const {
      data: { results: overview4 },
    } = await movieApi.upComingUS();
    utils.overview_replace(upComing, overview4);

    setMovies({
      isLoading: false,
      nowPlaying,
      topRated,
      popular,
      upComing,
    });
  };

  useEffect(() => {
    getData();
    console.log('get Data');
  }, []);

  return <Home {...movies} />;
};
