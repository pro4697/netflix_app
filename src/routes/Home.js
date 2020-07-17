import React from 'react';
import Flicking from '@egjs/react-flicking';
import { Fade, AutoPlay } from '@egjs/flicking-plugins';
import Movie from '../components/Movie';
import Panel from '../components/Panel';
import Section from '../components/Section';
import { movieApi } from '../Api';
import './Home.css';
import { motion } from 'framer-motion';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';

const plugins = [new Fade(), new AutoPlay(2600, 'NEXT')];
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
/*
  1. 장르 정보를 외부 파일의 함수로 빼서 저장하여 movie컴포넌트에서 그 함수를 호출한다.
  2. 일단 UI조정후 클릭시 상세정보 나오게, 배경화면은 backdrop_path로 접근
  3. 폰트도 포트폴레오 사이트에 적용한 것 가져오기
*/

class Home extends React.Component {
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
    overview_mapping(nowPlaying, overview1);

    const {
      data: { results: topRated },
    } = await movieApi.topRated();

    const {
      data: { results: overview2 },
    } = await movieApi.topRatedUS();
    overview_mapping(topRated, overview2);

    const {
      data: { results: upComing },
    } = await movieApi.upComing();

    const {
      data: { results: overview3 },
    } = await movieApi.upComingUS();
    overview_mapping(upComing, overview3);

    this.setState({ nowPlaying, topRated, upComing, isLoading: false });
  }

  render() {
    const { isLoading, nowPlaying, topRated, upComing, genres } = this.state;
    return isLoading ? (
      <div className='loader'>
        <span className='loader__text'>
          <i className='fa fa-spinner fa-spin'></i>
        </span>
      </div>
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
            {Panel_render(nowPlaying)}
          </Flicking>
        )}
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title='Now Playing'>
            <div className='movies'>{Movie_render(nowPlaying)}</div>
          </Section>
        )}
        {topRated && topRated.length > 0 && (
          <Section title='Top Rated'>
            <div className='movies'>{Movie_render(topRated)}</div>
          </Section>
        )}
        {upComing && upComing.length > 0 && (
          <Section title='UpComing'>
            <div className='movies'>{Movie_render(upComing)}</div>
          </Section>
        )}
      </motion.div>
    );
  }
}

function Movie_render(props) {
  return props.map((movie) => (
    <Movie
      key={movie.id}
      id={movie.id}
      title={movie.title}
      _date={movie.release_date}
      overview={movie.overview}
      poster={IMG_PATH + movie.poster_path}
      backdrop={IMG_PATH + movie.backdrop_path}
      vote={movie.vote_average}
    />
  ));
}

function Panel_render(props) {
  return props.map((movie) => (
    <Panel
      key={movie.id}
      id={movie.id}
      title={movie.title}
      _date={movie.release_date}
      overview={movie.overview}
      poster={IMG_PATH + movie.poster_path}
      backdrop={IMG_PATH + movie.backdrop_path}
      vote={movie.vote_average}
    />
  ));
}

function overview_mapping(movie, overview) {
  for (var i = 0; i < movie.length; i++)
    if (movie[i].overview.length < 10) movie[i].overview = overview[i].overview;
}

export default Home;
