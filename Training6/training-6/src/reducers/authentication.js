import * as types from "../actions/types";
import jwtDecode from "jwt-decode";

const initialState = {
  isAuthenticating: false,
  token: null,
  user: null,
  error: null,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        error: action.payload.error ? action.payload.error : null,
        token: action.payload.token ? action.payload.token : null,
        user: action.payload.token ? jwtDecode(action.payload.token) : null,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
