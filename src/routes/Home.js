import React from 'react';
import Flicking from '@egjs/react-flicking';
import { Fade, AutoPlay } from '@egjs/flicking-plugins';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import NavBottom from '../components/NavBottom';
import Loader from '../components/Loader';
import './Home.css';
import { utils } from '../utils';

import { getMovieData } from '../_actions/action';
import { connect } from 'react-redux';

class Home extends React.Component {
  state = {
    isLoading: true,
    nowPlaying: [],
    topRated: [],
    popular: [],
    upComing: [],
  };

  async componentDidMount() {
    if (!this.props.isSaved) {
      console.log('init');
      // 처음 Movie탭으로 접속시 JSON 받아옴
      this.props.getMovie().then((res) => {
        this.setState({
          isLoading: false,
          nowPlaying: res.payload.nowPlaying,
          topRated: res.payload.topRated,
          popular: res.payload.popular,
          upComing: res.payload.upComing,
        });
      });
    } else {
      console.log('reload');
      // 이후 재접속시 Redux에서 가져옴
      this.setState({
        isLoading: false,
        nowPlaying: this.props.isSaved.payload.nowPlaying,
        topRated: this.props.isSaved.payload.topRated,
        popular: this.props.isSaved.payload.popular,
        upComing: this.props.isSaved.payload.upComing,
      });
    }
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
                duration={400}
                adaptive={true}
                autoResize={true}
                collectStatistics={false}
                plugins={[new Fade(), new AutoPlay(2600, 'NEXT')]}
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

const mapStateToProps = (state) => ({
  isSaved: state.store.movieData,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie: () => dispatch(getMovieData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
