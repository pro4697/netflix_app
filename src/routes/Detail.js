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
        <div class='detail'>
          <img src={location.state.poster}></img>
          <span>
            {location.state.title}
            <br />
          </span>
          ,<span>{location.state.overview}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
