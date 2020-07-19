import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import NavBottom from '../components/NavBottom';
import Loader from '../components/Loader';
import { utils } from '../utils';
import { movieApi } from '../Api';
import './Home.css';

class Search extends React.Component {
  state = {
    isLoading: true,
    nowPlaying: [],
    topRated: [],
    upComing: [],
  };

  async componentDidMount() {
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
      data: { results: upComing },
    } = await movieApi.upComing();

    const {
      data: { results: overview3 },
    } = await movieApi.upComingUS();
    utils.overview_replace(upComing, overview3);

    this.setState({ nowPlaying, topRated, upComing, isLoading: false });
  }

  render() {
    const { isLoading, nowPlaying, topRated, upComing } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <motion.div
        className='container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title='Now Playing'>
            {utils.Movie_render(nowPlaying)}
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title='Top Rated'>{utils.Movie_render(topRated)}</Section>
        )}
        {upComing && upComing.length > 0 && (
          <Section title='UpComing'>{utils.Movie_render(upComing)}</Section>
        )}
        <NavBottom />
      </motion.div>
    );
  }
}

export default Search;
