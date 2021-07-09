import * as type from '../actionTypes/tasks';
import { DRAFT, READY, SUBMITTING, SUCCESS, ERROR } from '../../contant/taskStatus'


const initialState = [
    { id: 1, taskName: 'Backup DB', status: READY },
    { id: 2, taskName: 'Run SQL', status: DRAFT },
    { id: 3, taskName: 'Drop DB', status: DRAFT },
    { id: 4, taskName: 'Drop DB', status: ERROR },
    { id: 5, taskName: 'Drop DB', status: SUCCESS },

]


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
            console.log('update task action.payload :>> ', action.payload);
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return { ...action.payload, status: DRAFT }
                }
                return task
            })
        }
        case type.CHANGE_TASK_STATUS: {
            console.log('action.payload :>> ', action.payload);
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task, status: action.payload.status
                    }
                }
                return task
            })
        }

        default:
            return state
    }
}