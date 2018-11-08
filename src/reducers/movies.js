const initialState = {
  list: [],
  hearted: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        list: action.payload
      };
    case 'ADD_HEART':
      return {
        ...state,
        hearted: [ ...state.hearted, action.payload ]
      };
    case 'REMOVE_HEART':
      return {
        ...state,
        hearted: state.hearted.filter((currentId) => currentId !== action.payload)
      };
    default:
      return state;
  }
};
