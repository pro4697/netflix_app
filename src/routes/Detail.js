import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location, history } = this.props;
    if (location.state) {
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
                <div className='detail__title sub'>{`${location.state.date[0]}. ${location.state.date[1]}. ${location.state.date[2]}`}</div>
                <div className='detail__description'>
                  <div className='detail__overview'>
                    {location.state.overview}
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
