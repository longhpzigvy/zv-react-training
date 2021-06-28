import * as actionTypes from '../actionTypes/authorization'

export function getToken() {
    return { type: actionTypes.GET_TOKEN }
}

export function getTokenSuccess(payload) {
    return { type: actionTypes.GET_TOKEN_SUCCESS, payload }
}

