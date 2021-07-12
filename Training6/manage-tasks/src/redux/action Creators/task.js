import * as type from '../actionTypes/tasks'

export const addTask = name => {
    return { type: type.ADD_TASK, payload: name }
}

export const updateTask = ({ id, taskName }) => {
    return { type: type.UPDATE_TASK, payload: { id, taskName } }
}

export const changeTaskStatus = ({ id, status }) => {
    return { type: type.CHANGE_TASK_STATUS, payload: { id, status } }
}
