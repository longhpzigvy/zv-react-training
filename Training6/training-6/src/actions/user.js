import * as types from "./types";

export const fetchUsersAction = (payload) => {
  return {
    type: types.FETCH_USERS_REQUEST,
    payload,
  };
};

export const fetchUserAction = (payload) => {
  return {
    type: types.FETCH_USER_REQUEST,
    payload,
  };
};
