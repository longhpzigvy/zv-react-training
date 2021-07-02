import * as type from '../actionTypes/tasks'

export const addTask = payload => {
    return { type: type.ADD_TASK, payload }
}

export const updateTask = payload => {
    return { type: type.UPDATE_TASK, payload }
}

export const changeTaskStatusReady = payload => {
    return { type: type.CHANGE_TASK_STATUS_READY, payload }
}

export const changeTaskStatusSubmitting = payload => {
    return { type: type.CHANGE_TASK_STATUS_SUBMITTING, payload }
}

export const changeTaskStatusSuccess = payload => {
    return { type: type.CHANGE_TASK_STATUS_SUCCESS, payload }
}

export const changeTaskStatusError = payload => {
    return { type: type.CHANGE_TASK_STATUS_ERROR, payload }
}

