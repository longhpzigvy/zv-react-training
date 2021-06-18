import { ACTION_NAMES } from "../action/ActionName";
import { SAGA_NAMES } from "../saga/SagaNames";
import { createSelector } from "reselect";
import initialState from "../state/state";

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAGA_NAMES.SAGA_GET_LIST_TODO_SUCCESS:
            state = {
                ...state,
                todoList: action.data.todoList,
            };
            break;
        case SAGA_NAMES.SAGA_ADD_TODO_SUCCESS:
            state = {
                ...state,
                todoList: [...state.todoList, action.data.todo],
            };
            break;
        case SAGA_NAMES.SAGA_REMOVE_TODO_SUCCESS:
            let editedList = state.todoList.filter((todo) => {
                return todo.id !== action.data.todoId;
            });

            state = {
                ...state,
                todoList: editedList,
            };
            break;
        case SAGA_NAMES.SAGA_TOGGLE_TODO_SUCCESS:
            var list = state.todoList.map((todo) => {
                if (todo.id === action.data.todoId) {
                    return {
                        ...todo,
                        completed: action.data.completed,
                    };
                }
                return todo;
            });

            state = {
                ...state,
                todoList: list,
            };
            break;
        case ACTION_NAMES.SHOW_COMPLETED:
            var toggle = action.data.toggleStatus;
            state = {
                ...state,
                completedToggle: toggle,
            };
            break;

        default:
            break;
    }
    return state;
};
const getTodoList = (state) => state.todoList;

const getCompletedToggle = (state) => state.completedToggle;

export const getVisibleTodoItems = createSelector(
    [getTodoList, getCompletedToggle],
    (todoList, completedToggle) => {
        switch (completedToggle) {
            case false:
                return todoList;
            case true:
                return todoList.filter((t) => t.completed);
            default:
                break;
        }
    }
);

export default TodoReducer;
