import * as actionTypes from '../actionTypes/authorization'

export default (preState = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_TOKEN: {
            return {
                ...preState,
                isFetching: true
            }
        }
        case actionTypes.GET_TOKEN_SUCCESS: {
            return {
                ...preState,
                isFetching: false,
                token: action.payload.token ? action.payload.token : null,
                error: action.payload.error ? action.payload.error : null
            }
        }
        default:
            return preState
    }
}