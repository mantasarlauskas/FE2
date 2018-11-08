import { combineReducers } from 'redux';
import moviesReducer from './movies';
import genresReducer from './genres';
import logsReducer from './logs';

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  logs: logsReducer
});

