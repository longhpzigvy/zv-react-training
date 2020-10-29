import * as taskTypes from '../Constants/index';

export const fetchListTask = () => {
    return {
        type: taskTypes.FETCH_TASK
    }
}

export const getUserAccount = (acc) => {
    return {
        type: taskTypes.GET_USER_ACCOUNT,
        payload: {
            acc
        }
    }
}

export const checkUserAccount = (acc) => {
    return {
        type: taskTypes.CHECK_USER_ACCOUNT,
        payload: {
            acc
        }
    }
}

export const logOut = _ => {
    return {
        type: taskTypes.LOG_OUT
    }
}