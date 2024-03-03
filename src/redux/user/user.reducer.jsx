import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./user.constants";

const usersInitialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: null };
    case FETCH_USER_FAILURE:
      return { ...state, error: action.payload, users: [], loading: false };
    default:
      return state;
  }
};
export default usersReducer;
