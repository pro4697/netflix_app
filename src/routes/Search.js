import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import NavBottom from '../components/NavBottom';
import { MovieRender } from '../utils';
import { movieApi, tvApi } from '../Api';
import './Search.css';

class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    tv: [],
    value: '',
  };

  searchQuery = async () => {
    if (this.state.value !== '') {
      const {
        data: { results: movies },
      } = await movieApi.search(this.state.value);

      const {
        data: { results: tv },
      } = await tvApi.search(this.state.value);

      this.setState({ movies, tv, isLoading: false });
    }
  };

  componentDidMount() {
    this.searchQuery();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchQuery();
  };

  render() {
    const { movies, tv, isLoading } = this.state;
    return (
      <>
        <motion.div
          className='search__container'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.value}
              onChange={this.handleChange}
              placeholder='키워드 입력'
            />
          </form>
          {isLoading ? null : (
            <>
              {movies && movies.length > 0 && (
                <Section title='Movie'>{MovieRender(movies)}</Section>
              )}
              {tv && tv.length > 0 && (
                <Section title='TV Shows'>{MovieRender(tv)}</Section>
              )}
              {tv.length === 0 && movies.length === 0 && (
                <Section title='No Results' />
              )}
            </>
          )}
        </motion.div>
        <NavBottom props={[null, null, 'white']} />
      </>
    );
  }
}

export default Search;
