import { ACTION_NAMES } from "./ActionName";

export const getAllTodoItems = () => {
    return {
        type: ACTION_NAMES.GET_ALL_TODO_LIST,
    };
};
export const addTodoItem = (content) => {
    return {
        type: ACTION_NAMES.ADD_TODO,
        data: { todoContent: content },
    };
};
export const removeTodoItem = (todoId) => {
    return {
        type: ACTION_NAMES.DELETE_TODO,
        data: { todoId: todoId },
    };
};
export const toggleTodoItem = (todoId, toggleStatus) => {
    return {
        type: ACTION_NAMES.TOGGLE_TODO,
        data: { todoId: todoId, toggleStatus: toggleStatus },
    };
};
export function showCompleted(toggleStatus) {
    return {
        type: ACTION_NAMES.SHOW_COMPLETED,
        data: { toggleStatus: toggleStatus },
    };
}
