// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <div className="rating">{rating}</div>;
  }
}
Rating.propTypes = { rating: PropTypes.string.isRequired };
// Rating.PropTypes = { rating: PropTypes.number };

export default Rating;
