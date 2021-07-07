import { initialState } from "../state/state";
import { ACTION_NAMES } from "../action/ActionNames";
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_NAMES.GET_ALL_USERS_INFO_SUCCESS:
            return {
                ...state,
                usersList: action.data,
            };
        case ACTION_NAMES.GET_ALL_USERS_INFO_ERROR:
            return {
                ...state,
                usersList: [],
            };
        case ACTION_NAMES.GET_ACCOUNT_INFO_SUCCESS:
            return {
                ...state,
                userProfile: action.data,
            };
        case ACTION_NAMES.GET_ACCOUNT_INFO_ERROR:
            return {
                ...state,
                userProfile: {},
            };
        case ACTION_NAMES.LOGIN_USER_SUCCESS:
            return {
                ...state,
                userToken: action.data,
            };
        case ACTION_NAMES.LOGIN_USER_ERROR:
            return {
                ...state,
                userToken: null,
            };
        default:
            return state;
    }
}
