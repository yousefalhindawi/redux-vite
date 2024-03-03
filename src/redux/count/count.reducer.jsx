import { ADD_COUNT, REMOVE_COUNT } from "./count.constants";

const countInitialState = {
  count: 0,
};

const countReducer = (state = countInitialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: state.count + action.payload };
    case REMOVE_COUNT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default countReducer;