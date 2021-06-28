import * as actionTypes from '../actionTypes/users'

export const getUsers = payload => {
    return { type: actionTypes.GET_USERS, payload }
}

export const getUsersSuccess = payload => {
    return { type: actionTypes.GET_USERS_SUCCESS, payload }
}

export const getUsersError = payload => {
    return { type: actionTypes.ERROR, payload }
}

export const getUser = payload => {
    return { type: actionTypes.GET_USER, payload }
}

export const getUserSuccess = payload => {
    return { type: actionTypes.GET_USER_SUCCESS, payload }
}

export const getUserError = payload => {
    return { type: actionTypes.ERROR, payload }
}
