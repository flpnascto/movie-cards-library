// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const listMovies = this.props.movies;
    return (
      <div>
        {listMovies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
      
    );
  }
}

export default MovieList;
