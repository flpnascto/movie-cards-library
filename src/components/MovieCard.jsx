// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, imagePath, rating} = this.props.movie;
    return (
      <div>
        <img src={imagePath} />
        <h4>{title}</h4>
      </div>
    );
  }
}

export default MovieCard;
