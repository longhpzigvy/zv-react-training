import * as type from '../actionTypes/tasks'

export const addTask = payload => {
    return { type: type.ADD_TASK, payload }
}

export const updateTask = payload => {
    return { type: type.UPDATE_TASK, payload }
}

export const changeTaskStatus = ({ id, status }) => {
    return { type: type.CHANGE_TASK_STATUS, payload: { id, status } }
}
