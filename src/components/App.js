import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { getMovies } from '../thunks';
import { getCurrentDate } from '../date';
import { addAppLoadedEvent } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);

    props.onGetMovies();
  }

  componentDidMount() {
    const { onLoad } = this.props;

    onLoad(getCurrentDate());
  }

  render() {
    const { movieList } = this.props;

    return (
      <Fragment>
        <Genres />

        <div className="cards">
          {movieList.map(movie => (
            <Card
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default connect(
  ({ movies: { list } }) => ({
    movieList: list
  }),
  dispatch => ({
    onGetMovies: () => dispatch(getMovies()),
    onLoad: date => dispatch(addAppLoadedEvent(date))
  })
)(App);
