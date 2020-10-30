import * as taskTypes from '../Constants/index';


export const loginRequest = (user, password) => {
    return {
        type: taskTypes.LOGIN_REQUEST,
        payload: {
            user, password
        }
    }
}

export const loginSuccess = () => {
    return {
        type: taskTypes.LOGIN_SUCCESS
    }
}

export const loginFailure = (error) => {
    return {
        type: taskTypes.LOGIN_FAILURE,
        payload: {
            error
        }
    }
}


export const logOut = _ => {
    return {
        type: taskTypes.LOG_OUT
    }
}