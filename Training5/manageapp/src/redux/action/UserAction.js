import { ACTION_NAMES } from "./ActionNames";

export const LoginUser = (data) => {
    return {
        type: ACTION_NAMES.LOGIN_USER,
        data,
    };
};
export const GetAllUsersInfo = (data) => {
    return {
        type: ACTION_NAMES.GET_ALL_USERS_INFO,
        data,
    };
};
export const GetAccountInfo = (data) => {
    return {
        type: ACTION_NAMES.GET_ACCOUNT_INFO,
        data,
    };
};
