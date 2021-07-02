import * as type from '../actionTypes/tasks';
import { DRAFT, READY, SUBMITTING, SUCCESS, ERROR } from '../../contant/taskStatus'


const initialState = []


const newTaskId = (state) => {
    const maxId = state.reduce((maxId, task) => Math.max(task.id, maxId), -1)
    return maxId + 1
}

export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case type.ADD_TASK: {
            return [
                ...state, {
                    id: newTaskId(state),
                    taskName: action.payload,
                    status: DRAFT
                }
            ]
        }
        case type.UPDATE_TASK: {
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return { ...action.payload, status: DRAFT }
                }
                return task
            })
        }
        case type.CHANGE_TASK_STATUS_READY: {
            return state.map(task => {
                if (task.id === action.payload) {
                    return { ...task, status: READY }
                }
                return task;
            })
        }
        case type.CHANGE_TASK_STATUS_SUBMITTING: {
            return state.map(task => {
                if (task.id === action.payload) {
                    return { ...task, status: SUBMITTING }
                }
                return task;
            })
        }
        case type.CHANGE_TASK_STATUS_SUCCESS: {
            return state.map(task => {
                if (task.id === action.payload) {
                    return { ...task, status: SUCCESS }
                }
                return task;
            })
        }
        case type.CHANGE_TASK_STATUS_ERROR: {
            return state.map(task => {
                if (task.id === action.payload) {
                    return { ...task, status: ERROR }
                }
                return task;
            })
        }

        default:
            return state
    }
}