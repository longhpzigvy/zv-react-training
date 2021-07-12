import * as actionTypes from "../../constants/ActionTypes";

export const getUsers = (payload) => {
  return {
    type: actionTypes.GET_USERS,
    payload,
  };
};


export const getUsersError = (payload) => {
  return {
    type: actionTypes.ERROR,
    payload,
  };
};

export const getUser = (payload) => {
  return {
    type: actionTypes.GET_USER,
    payload,
  };
};

export const getUserError = (payload) => {
  return {
    type: actionTypes.ERROR,
    payload,
  };
};
