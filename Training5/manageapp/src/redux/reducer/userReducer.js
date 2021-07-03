import { initialState } from "../state/state";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SAGA_GET_ALL_USERS_INFO":
            return {
                ...state,
                usersList: action.data,
            };
        case "SAGA_GET_ACCOUNT_INFO":
            return {
                ...state,
                myProfile: action.data,
            };
        case "SAGA_LOGIN_USER":
            return {
                ...state,
                userToken: action.data,
            };
        default:
            return state;
    }
}
