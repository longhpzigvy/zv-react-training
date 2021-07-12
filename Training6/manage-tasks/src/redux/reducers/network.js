import * as type from '../actionTypes/network'


export default function networkReducer(state = { status: window.navigator.onLine }, action) {
    switch (action.type) {
        case type.LISTEN_NETWORK_STATUS: {
            return action.payload
        }
        case type.CHANGE_NETWORK_STATUS: {
            return { ...state, status: action.payload }
        }
        default:
            return state
    }
}