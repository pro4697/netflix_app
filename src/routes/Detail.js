import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { movieApi } from '../Api';
import './Detail.css';

class Detail extends React.Component {
  state = {
    genres: [],
  };

  async componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      document.location.href = '/';
      // history.push('/');
    }

    const {
      data: { genres },
    } = await movieApi.getDetail(location.state.id);
    this.setState({ genres });
  }

  render() {
    const { location, history } = this.props;
    const { genres } = this.state;
    if (location.state) {
      const over = location.state.overview.split('. '); // 문단별로 자르고
      for (var i = 0; i < over.length - 1; i++) over[i] += '.'; // 문단끝에 마침표를 찍는다

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='detail'>
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
            <div
              className='detail__backdrop'
              style={{ backgroundImage: `url(${location.state.backdrop})` }}
            />
            <br />
            <div className='detail__top-box'>
              <div
                className='detail__poster'
                style={{ backgroundImage: `url(${location.state.poster})` }}
              />
              <div className='detail__info'>
                <div className='detail__title'>{location.state.title}</div>
                <div className='detail__title star'>
                  <FontAwesomeIcon icon={faStar} className='panel__star' />
                  <span> {location.state.vote} / 10</span>
                </div>
                <div className='detail__description'>
                  <div className='detail__title year'>{`${location.state.date[0]}. ${location.state.date[1]}. ${location.state.date[2]}`}</div>
                  <div className='detail__title genres'>
                    {genres.map((g) => `${g.name} `)}
                  </div>
                  <div className='detail__overview'>
                    {over.map((overv) => (
                      <p>{overv}</p> // 문단별 줄바꿈
                    ))}
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
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
