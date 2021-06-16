import * as types from "../actions/types";

const initialState = {
  isFetching: false,
  users: null,
  user: null,
  error: null,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error ? action.payload.error : null,
        users: action.payload.users ? action.payload.users : null,
      };
    case types.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case types.FETCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error ? action.payload.error : null,
        user: action.payload ? action.payload : null,
      };
    case types.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return {};
  }
}
