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
            console.log('action.payload :>> ', action.payload);
            return {
                ...preState,
                isFetching: false,
                users: action.payload.users ? action.payload.users : null,
                // error: action.payload.error ? action.payload.error : null
            }
        }
        default:
            return preState
    }
}