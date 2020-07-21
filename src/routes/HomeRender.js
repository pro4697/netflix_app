import React from 'react';
import Flicking from '@egjs/react-flicking';
import { Fade, AutoPlay } from '@egjs/flicking-plugins';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import NavBottom from '../components/NavBottom';
import Loader from '../components/Loader';
import { utils } from '../utils';
import './Home.css';

const plugins = [new Fade(), new AutoPlay(2600, 'NEXT')];

export default ({ isLoading, nowPlaying, topRated, popular, upComing }) => (
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
          <Section title='Top Rated'>{utils.Movie_render(topRated)}</Section>
        )}
        {upComing && upComing.length > 0 && (
          <Section title='UpComing'>{utils.Movie_render(upComing)}</Section>
        )}
      </motion.div>
    )}
    <NavBottom props={['white', null, null]} />
  </>
);
