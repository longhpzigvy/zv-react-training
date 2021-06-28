import * as actionTypes from '../actionTypes/users'

export default (preState = {}, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS: {
            return {
                ...preState,
                isFetching: true
            }
        }
        case actionTypes.GET_USERS_SUCCESS: {
            return {
                ...preState,
                isFetching: false,
                users: action.payload
            }
        }
        case actionTypes.GET_USER: {
            return {
                ...preState,
                isFetching: true
            }
        }
        case actionTypes.GET_USER_SUCCESS: {
            return {
                ...preState,
                isFetching: false,
                user: action.payload
            }
        }
        case actionTypes.ERROR: {
            return {
                ...preState,
                isFetching: false,
                error: action.payload
            }
        }
        default:
            return preState
    }
}