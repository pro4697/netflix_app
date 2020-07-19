import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import NavBottom from '../components/NavBottom';
import Loader from '../components/Loader';
import { utils } from '../utils';
import { tvApi } from '../Api';
import './Tv.css';

class Tv extends React.Component {
  state = {
    isLoading: true,
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
  };

  async componentDidMount() {
    const {
      data: { results: today },
    } = await tvApi.today();

    // const {
    //   data: { results: overview1 },
    // } = await movieApi.nowPlayingUS();
    // utils.overview_replace(nowPlaying, overview1);

    const {
      data: { results: thisWeek },
    } = await tvApi.thisWeek();

    const {
      data: { results: topRated },
    } = await tvApi.topRated();

    const {
      data: { results: popular },
    } = await tvApi.popular();

    this.setState({ today, topRated, thisWeek, popular, isLoading: false });
  }

  render() {
    const { isLoading, today, thisWeek, topRated, popular } = this.state;
    return isLoading ? (
      <Loader />
    ) : (
      <motion.div
        className='tv__container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {today && today.length > 0 && (
          <Section title='Today'>{utils.Movie_render(today)}</Section>
        )}
        {thisWeek && thisWeek.length > 0 && (
          <Section title='ThisWeek'>{utils.Movie_render(thisWeek)}</Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title='TopRated'>{utils.Movie_render(topRated)}</Section>
        )}
        {popular && popular.length > 0 && (
          <Section title='Popular'>{utils.Movie_render(popular)}</Section>
        )}
        <NavBottom />
      </motion.div>
    );
  }
}

export default Tv;
