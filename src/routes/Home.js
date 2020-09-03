import React from 'react';
import Flicking from '@egjs/react-flicking';
import { Fade, AutoPlay } from '@egjs/flicking-plugins';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import NavBottom from '../components/NavBottom';
import Loader from '../components/Loader';
import './Home.css';
import { utils } from '../utils';
import { movieApi } from '../Api';

const plugins = [new Fade(), new AutoPlay(2600, 'NEXT')];

class Home extends React.Component {
  state = {
    isLoading: true,
    nowPlaying: [],
    topRated: [],
    popular: [],
    upComing: [],
  };

  async componentDidMount() {
    const {
      data: { results: nowPlaying },
    } = await movieApi.nowPlaying();

    // 한글로 번역된 줄거리가 없는 경우 영문 줄거리로 대체
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

    this.setState({
      isLoading: false,
      nowPlaying,
      topRated,
      popular,
      upComing,
    });
  }

  render() {
    const { isLoading, nowPlaying, topRated, popular, upComing } = this.state;
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <motion.div
            className='container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {nowPlaying && nowPlaying.length > 0 && (
              <Flicking
                className='flicking'
                circular={true}
                zIndex={0}
                duration={400}
                collectStatistics={false}
                plugins={plugins}
              >
                {utils.Panel_render(nowPlaying)}
              </Flicking>
            )}
            {popular && popular.length > 0 && (
              <Section title='Popular'>{utils.Movie_render(popular)}</Section>
            )}
            {topRated && topRated.length > 0 && (
              <Section title='Top Rated'>
                {utils.Movie_render(topRated)}
              </Section>
            )}
            {upComing && upComing.length > 0 && (
              <Section title='UpComing'>{utils.Movie_render(upComing)}</Section>
            )}
          </motion.div>
        )}
        <NavBottom props={['white', null, null]} />
      </>
    );
  }
}

export default Home;
