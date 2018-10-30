import React, { Fragment } from 'react';
import axios from 'axios';
import Card from './Card';
import { endpoints } from '../../config';

export default class App extends React.Component {
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

  requestMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then(res => this.setMovieList(res.data.results))
      .catch(error => console.log(error));
  };

  requestGenres = () => {
    axios
      .get(endpoints.genres())
      .then(res => this.setGenreList(res.data.genres))
      .catch(error => console.log(error));
  };

  requestMoviesByGenre = ({ target: { value } }) => {
    axios
      .get(endpoints.genreMovies(value))
      .then(res => this.setMovieList(res.data.results))
      .catch(error => console.log(error));
  };

  toggleLike = id => {
    const { likedMovies } = this.state;
    likedMovies.includes(id) ? this.setState({ likedMovies: likedMovies.filter(movieId => movieId !== id) }) :
      this.setState({ likedMovies: [ ...likedMovies, id ] });
  };

  render() {
    const { movieList, genreList, likedMovies } = this.state;
    return (
      <Fragment>
        <select onChange={this.requestMoviesByGenre} className="genres">
          {genreList.map(({ id, name }) =>
            <option className="genre" key={id} value={id}>{name}</option>)
          }
        </select>
        <div className="cards">
          {movieList.map(({ id, ...movie }) =>
            <Card
              toggleLike={() => this.toggleLike(id)}
              key={id}
              movie={movie}
              liked={likedMovies.includes(id)}
            />)
          }
        </div>
      </Fragment>
    );
  }
}
