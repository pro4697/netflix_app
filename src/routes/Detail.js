import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className='detail'>
          <div
            className='detail__backdrop'
            style={{ backgroundImage: `url(${location.state.backdrop})` }}
          />
          <br />
          <div className='detail__description'>
            {location.state.title}
            <br />
            {location.state.overview}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
