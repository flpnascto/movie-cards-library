// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const listMovies = this.props.movies;
    console.log(listMovies)
    return (
      <div>
        {listMovies.map(movie => <MovieCard movie={movie} />)}
      </div>
      
    );
  }
}

export default MovieList;
