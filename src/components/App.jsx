import React from 'react';
import movies from '../data/exampleMovieData';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

console.log(`this is movies`, movies);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          movies: movies,
          searchedMovie: ''
        }

        // this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSearch(event) { 
      var inputText = event.target.value;
      this.setState({searchedMovie: inputText})
    };

    //search movies
    handleSubmit(event) {
      //if event not handled then this default action should not be taken
      event.preventDefault();
      var searchedMovies = [];

      //search movies by title
      this.state.movies.forEach(movie => {
        if (movie.title.includes(this.state.searchedMovie)) {
          searchedMovies.push(movie);
        }
      });
      //show matching searched movies
      if (searchedMovies.length !== 0) {
        this.setState({
          movies: searchedMovies,
        });
      } else {
        this.setState({movies: movies})
      }
  }

    render () {
      return (
        <div>
          <Search searchedMovie={this.state.searchedMovie}
            // handleChange={this.handleChange}
            handleSearch={this.handleSearch}
            handleSubmit={this.handleSubmit}
          />
          <AddMovie />
          <MovieList movies={movies} />
        </div>
        );
    }
}

export default App;


