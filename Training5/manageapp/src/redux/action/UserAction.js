import { ACTION_NAMES } from "./ActionNames";

export const loginUser = (data) => {
    return {
        type: ACTION_NAMES.LOGIN_USER,
        data,
    };
};

export const getAllUsersInfo = (data) => {
    return {
        type: ACTION_NAMES.GET_ALL_USERS_INFO,
        data,
    };
};

export const getAccountInfo = (data) => {
    return {
        type: ACTION_NAMES.GET_ACCOUNT_INFO,
        data,
    };
};
