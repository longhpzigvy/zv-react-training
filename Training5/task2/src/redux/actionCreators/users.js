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

