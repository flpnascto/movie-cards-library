// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, imagePath, rating} = this.props.movie;
    return (
      <img src={imagePath}/ >
    );
  }
}

export default MovieCard;
