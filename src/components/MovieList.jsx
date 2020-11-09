// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { listMovies } = this.props;
    return (
      <div className="movie-list">
        {listMovies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = { listMovies: PropTypes.arrayOf.isRequired };

export default MovieList;
