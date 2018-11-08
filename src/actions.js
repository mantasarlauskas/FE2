export const setMovies = movies => ({
  type: 'SET_MOVIES',
  payload: movies
});

export const setGenres = genres => ({
  type: 'SET_GENRES',
  payload: genres
});

export const addHeart = id => ({
  type: 'ADD_HEART',
  payload: id
});

export const removeHeart = id => ({
  type: 'REMOVE_HEART',
  payload: id
});

export const addAppLoadedEvent = date => ({
  type: 'ADD_APPLICATION_LOADED_EVENT',
  payload: date
});

export const addGenreChangeEvent = (date, genre) => ({
  type: 'ADD_GENRE_CHANGED_EVENT',
  payload: { date, genre }
});

export const addMovieHeartedEvent = (date, title) => ({
  type: 'ADD_MOVIE_HEARTED_EVENT',
  payload: { date, title }
});

export const addMovieUnheartedEvent = (date, title) => ({
  type: 'ADD_MOVIE_UNHEARTED_EVENT',
  payload: { date, title }
});