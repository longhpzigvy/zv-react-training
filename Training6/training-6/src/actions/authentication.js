import * as types from "./types";

export const loginAction = (payload) => {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
};
