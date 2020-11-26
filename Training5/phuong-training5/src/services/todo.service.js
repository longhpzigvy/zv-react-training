import { deleteAsync, getAsync, postAsync, putAsync } from "../utils/http-clients"

const TODO_URL = "todos"

export const getAllTodoAsync = () => {
    return getAsync(TODO_URL)
}

export const addTodoAsync = (req) => {
    return postAsync(TODO_URL, req)
}

export const updateTodoAsync = (req) => {
    const url = `${TODO_URL}/${req.id}`
    return putAsync(url, req)
}

export const deleteTodoAsync = (todoId) => {
    const url = `${TODO_URL}/${todoId}`
    return deleteAsync(url)
}