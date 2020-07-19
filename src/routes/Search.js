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
  };

  async componentDidMount() {}

  render() {
    return (
      <motion.div
        className='container'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        만드는중입니다...
        <Loader />
      </motion.div>
    );
  }
}

export default Search;
