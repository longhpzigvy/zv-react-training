import * as type from '../actionTypes/network'

export const changeNetworkStatus = payload => {
    return { type: type.CHANGE_NETWORK_STATUS, payload }
}

export const listenNetworkStatus = payload => {
    return { type: type.LISTEN_NETWORK_STATUS, payload }
}