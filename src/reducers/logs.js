export default (state = {}, action) => {
  switch(action.type) {
    case 'ADD_APPLICATION_LOADED_EVENT':
      return {
        ...state,
        [action.payload]: 'Aplikacija uzkrauta'
      };
    case 'ADD_GENRE_CHANGED_EVENT':
      return {
        ...state,
        [action.payload.date]: `Pakeistas zanras i ${action.payload.genre}`
      };
    case 'ADD_MOVIE_HEARTED_EVENT':
      return {
        ...state,
        [action.payload.date]: `Uzdeta sirdele filmui ${action.payload.title}`
      };
    case 'ADD_MOVIE_UNHEARTED_EVENT':
      return {
        ...state,
        [action.payload.date]: `Nuimta sirdele filmui ${action.payload.title}`
      };
    default:
      return state;
  }
};