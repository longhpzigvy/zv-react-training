import { initialState } from "../state/state";
import { ACTION_NAMES } from "../action/ActionNames";
import jwtDecode from "jwt-decode";
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_NAMES.GET_ALL_USERS_INFO:
            return {
                ...state,
                isLoading: true,
            };
        case ACTION_NAMES.GET_ALL_USERS_INFO_SUCCESS:
            return {
                ...state,
                usersList: action.data,
                isLoading: false,
            };
        case ACTION_NAMES.GET_ALL_USERS_INFO_ERROR:
            return {
                ...state,
                error: action.err,
                usersList: [],
                isLoading: false,
            };
        case ACTION_NAMES.GET_ACCOUNT_INFO:
            return {
                ...state,
                isLoading: true,
            };
        case ACTION_NAMES.GET_ACCOUNT_INFO_SUCCESS:
            return {
                ...state,
                usersList: [action.data],
                isLoading: false,
            };
        case ACTION_NAMES.GET_ACCOUNT_INFO_ERROR:
            return {
                ...state,
                usersList: [],
                error: action.err,
                isLoading: false,
            };
        case ACTION_NAMES.LOGIN_USER:
            return {
                ...state,
                isAuthenticate: true,
            };
        case ACTION_NAMES.LOGIN_USER_SUCCESS:
            return {
                ...state,
                userToken: {
                    token: action.data.token,
                    user: jwtDecode(action.data.token),
                },
                isAuthenticate: false,
            };
        case ACTION_NAMES.LOGIN_USER_ERROR:
            return {
                ...state,
                userToken: null,
                user: "",
                isAuthenticate: false,
            };
        default:
            return state;
    }
}
