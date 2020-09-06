// SAMPLE CODE!
// array based approach:

const streamReducer = (state=[], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if(stream.id === action.payload.id) {
          return action.payload;
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

const streamReducer = (state={}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // const newState = { ...state };
      // newState[action.payload.id] = action.payload;
      // return newState;

      // same result to outcommented:
      return { ...state, [action.payload.id]: action.payload }
      //
    default:
      return state;
  }
}
