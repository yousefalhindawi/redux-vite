import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./user.constants";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

const fetchUserFailure = (payload) => {
  return {
    type: FETCH_USER_FAILURE,
    payload,
  };
};

const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const usersResponse = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "GET",
          headers: {
            authorization: "Bearer token",
          },
        }
      );
      const users = await usersResponse.json();
      dispatch(fetchUserSuccess(users));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};

export { fetchUsers, fetchUserRequest, fetchUserSuccess, fetchUserFailure };
