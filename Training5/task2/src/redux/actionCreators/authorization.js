import * as actionTypes from '../actionTypes/authorization'

export function getToken(payload) {
    return { type: actionTypes.GET_TOKEN, payload }
}

export function getTokenSuccess(payload) {
    return { type: actionTypes.GET_TOKEN_SUCCESS, payload }
}

