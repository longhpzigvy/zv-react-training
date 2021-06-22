import { ACTION_NAMES } from "../action/ActionName";
import initialState from "../state/state";

const TodoReducer = (state = initialState, action) => {
    const getVisibleTodoItems = () => {
        switch (state.completedToggle) {
            case false:
                return state.todoList.filter((t) =>
                    t.name.includes(state.searchTerm)
                );
            case true:
                return state.todoList
                    .filter((t) => t.name.includes(state.searchTerm))
                    .filter((t) => t.completed);
            default:
                break;
        }
    };
    switch (action.type) {
        case "SAGA_GET_LIST_TODO":
            state = {
                ...state,
                todoList: action.data.todoList,
            };
            break;
        case "SAGA_ADD_TODO":
            state = {
                ...state,
                todoList: [...state.todoList, action.data.todo],
            };
            break;
        case "SAGA_REMOVE_TODO":
            let editedList = state.todoList.filter((todo) => {
                return todo.id !== action.data.todoId;
            });

            state = {
                ...state,
                todoList: editedList,
            };
            break;
        case "SAGA_TOGGLE_TODO":
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
        case ACTION_NAMES.SEARCH_TODO:
            var searchTerm = action.data.searchTerm;
            state = {
                ...state,
                searchTerm: searchTerm,
            };
            break;
        default:
            break;
    }
    state = {
        ...state,
        visibleTodoItems: getVisibleTodoItems(),
    };
    return state;
};
export default TodoReducer;
