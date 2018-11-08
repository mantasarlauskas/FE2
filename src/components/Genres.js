import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenres, getMoviesByGenre } from "../thunks";

class Genres extends Component {
  constructor(props) {
    super(props);

    props.onGetGenres();
  }

  render() {
    const { genres, onGetMoviesByGenre } = this.props;

    return (
      <div className="genres">
        {genres.map(({ id, name }) => (
          <div key={id} className="genre" onClick={() => onGetMoviesByGenre(id, name)}>
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
  ({ genres }) => ({
    genres
  }),
  dispatch => ({
    onGetGenres: () => dispatch(getGenres()),
    onGetMoviesByGenre: (id, name) => dispatch(getMoviesByGenre(id, name))
  })
)(Genres);
