import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => (
  <div className="movie-list">
  {props.movies.map((movie) => 
    //Each child in an array or iterator should have a unique "key" prop.
    <MovieListEntry key={movie.title} movie={movie} />
  )}
  </div>
);


export default MovieList;