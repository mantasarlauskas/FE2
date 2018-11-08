import axios from 'axios';
import { endpoints } from '../config';
import { getCurrentDate } from './date';
import {
  addGenreChangeEvent,
  addHeart,
  addMovieHeartedEvent,
  addMovieUnheartedEvent,
  removeHeart,
  setGenres,
  setMovies
} from './actions';

export const getMovies = () => dispatch => {
  axios
    .get(endpoints.mostPopularMovies())
    .then(({ data: { results } }) => dispatch(setMovies(results)))
    .catch(error => console.log(error));
};

export const getGenres = () => dispatch => {
  axios
    .get(endpoints.genres())
    .then(({ data: { genres } }) => dispatch(setGenres(genres)))
    .catch(error => console.log(error));
};

export const getMoviesByGenre = (id, name) => dispatch => {
  axios
    .get(endpoints.genreMovies(id))
    .then(({ data: { results } }) => {
      dispatch(setMovies(results));
      dispatch(addGenreChangeEvent(getCurrentDate(), name));
    })
    .catch(error => console.log(error));
};

export const heartMovie = (id, title) => dispatch => {
  dispatch(addHeart(id));
  dispatch(addMovieHeartedEvent(getCurrentDate(), title))
};

export const unheartMovie = (id, title) => dispatch => {
  dispatch(removeHeart(id));
  dispatch(addMovieUnheartedEvent(getCurrentDate(), title))
};
