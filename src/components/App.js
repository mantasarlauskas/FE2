import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Card from './Card';
import { endpoints } from '../../config';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      genreList: [],
      likedMovies: []
    };

    this.requestGenres();
    this.requestMovies();
  }

  requestMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then(({ data: { results } }) => this.setMovieList(results))
      .catch(error => console.log(error));
  };

  requestGenres = () => {
    axios
      .get(endpoints.genres())
      .then(({ data: { genres } }) => this.setGenreList(genres))
      .catch(error => console.log(error));
  };

  requestMoviesByGenre = id => {
    axios
      .get(endpoints.genreMovies(id))
      .then(({ data: { results } }) => this.setMovieList(results))
      .catch(error => console.log(error));
  };

  setMovieList = movieList => {
    this.setState({
      movieList
    });
  };

  setGenreList = genreList => {
    this.setState({
      genreList
    });
  };

  toggleLike = id => {
    const { likedMovies } = this.state;

    likedMovies.includes(id)
      ? this.setState({ likedMovies: likedMovies.filter(movieId => movieId !== id) })
      : this.setState({ likedMovies: [ ...likedMovies, id ] });
  };

  displayCard = ({ id, ...movie }) => {
    const { likedMovies } = this.state;

    return (
      <Card
        toggleLike={() => this.toggleLike(id)}
        key={id}
        movie={movie}
        liked={likedMovies.includes(id)}
      />
    );
  };

  displayGenre = ({ id, name }) => {
    return (
      <div
        className="genre"
        key={id}
        onClick={() => this.requestMoviesByGenre(id)}
      >
        {name}
      </div>
    );
  };

  render() {
    const { movieList, genreList } = this.state;

    return (
      <Fragment>
        <div className="genres">
          {genreList.map(this.displayGenre)}
        </div>
        <div className="cards">
          {movieList.map(this.displayCard)}
        </div>
      </Fragment>
    );
  }
}
