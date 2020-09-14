import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import NavBottom from '../components/NavBottom';
import Loader from '../components/Loader';
import { utils } from '../utils';
import './Tv.css';

import { getTvData } from '../_actions/action';
import { connect } from 'react-redux';

class Tv extends React.Component {
  state = {
    isLoading: true,
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
  };

  async componentDidMount() {
    if (!this.props.isSaved) {
      // 처음 Movie탭으로 접속시 JSON 받아옴
      this.props.getMovie().then((res) => {
        console.log('init');
        this.setState({
          isLoading: false,
          today: res.payload.today,
          thisWeek: res.payload.thisWeek,
          topRated: res.payload.topRated,
          popular: res.payload.popular,
        });
      });
    } else {
      console.log('reload');
      // 이후 재접속시 Redux에서 가져옴
      this.setState({
        isLoading: false,
        today: this.props.isSaved.payload.today,
        thisWeek: this.props.isSaved.payload.thisWeek,
        topRated: this.props.isSaved.payload.topRated,
        popular: this.props.isSaved.payload.popular,
      });
    }
  }

  render() {
    const { isLoading, today, thisWeek, topRated, popular } = this.state;
    return (
      <>
        {isLoading ? (
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
          </motion.div>
        )}
        <NavBottom props={[null, 'white', null]} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isSaved: state.store.tvData,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie: () => dispatch(getTvData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tv);
