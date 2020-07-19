import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { movieApi } from '../Api';
import Description from '../components/Description';
import './Detail.css';

const page = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '10vh',
  },
};

class Detail extends React.Component {
  state = {
    genres: [],
    runtime: null,
    results: [],
  };

  async componentDidMount() {
    const { location } = this.props;
    if (location.state === undefined) {
      document.location.href = '/netflix_app';
      // history.push('/');
    }

    const {
      data: { genres, runtime },
    } = await movieApi.getDetail(location.state.id);

    const {
      data: { results },
    } = await movieApi.getVideos(location.state.id);
    console.log(results);
    this.setState({ genres, runtime, results });
  }

  render() {
    const { location, history } = this.props;
    const { genres, runtime, results } = this.state;

    if (location.state) {
      const over = location.state.overview.split('. '); // 문단별로 자르고
      for (var i = 0; i < over.length - 1; i++) over[i] += '.'; // 문단끝에 마침표를 찍는다

      return (
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          initial='out'
          animate='in'
          exit='out'
          variants={page}
          className='detail'
        >
          <Link
            to=''
            onClick={() => {
              history.goBack();
            }}
          >
            <div className='nav__container'>
              <FontAwesomeIcon icon={faArrowLeft} className='nav__backbtn' />
            </div>
          </Link>
          {location.state.backdrop !== 'https://image.tmdb.org/t/p/w500null' ? (
            <div
              className='detail__backdrop'
              style={{ backgroundImage: `url(${location.state.backdrop})` }}
            />
          ) : null}

          <br />
          <div className='detail__container'>
            {location.state.poster !== 'https://image.tmdb.org/t/p/w500null' ? (
              <div
                className='detail__poster'
                style={{ backgroundImage: `url(${location.state.poster})` }}
              />
            ) : null}
            <div className='detail__info'>
              <div className='detail__title'>{location.state.title}</div>
              <div className='detail__title star'>
                <FontAwesomeIcon icon={faStar} className='panel__star' />
                <span> {location.state.vote} / 10</span>
              </div>
              <div className='detail__description'>
                <Description title='개봉'>{`${location.state.date[0]}. ${location.state.date[1]}. ${location.state.date[2]}.`}</Description>
                <Description title='장르'>
                  {genres.map((g) => `${g.name} `)}
                </Description>
                <Description title='시간'>{runtime}분</Description>
                <Description title='줄거리'>
                  {over.map((overv) => (
                    <p>{overv}</p>
                  ))}
                </Description>
                <Description title='추천 영상'>
                  {results.map((video) => (
                    <a
                      href={`https://www.youtube.com/watch?v=${video.key}`}
                      className='detail__videoContainer'
                    >
                      <FontAwesomeIcon icon={faYoutube} className='youtube' />{' '}
                      <div className='detail__videoName'>{video.name}</div>
                    </a>
                  ))}
                </Description>
                <br />
                <br />
              </div>
            </div>
          </div>
        </motion.div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
