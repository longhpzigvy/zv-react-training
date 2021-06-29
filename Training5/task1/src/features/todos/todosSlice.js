import { createSelector } from '@reduxjs/toolkit'
import { StatusFilters } from "../filters/filtersSlice";
import axios from 'axios'

const initialState = []


export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todosAdded': {
            return [...state, action.payload]
        }
        case 'todos/todosToggled': {
            return state.find(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        }
        case 'todos/todosDeleted': {
            return state.filter(todo => todo.id !== action.payload)
        }
        case 'todos/todosSearched': {
            return state.filter(todo => todo.name.includes(action.payload))
        }
        case 'todos/todosLoaded': {
            return action.payload
        }
        default:
            return state
    }
}

export const todosAdded = payload => {
    return { type: 'todos/todosAdded', payload }
}
export const todosToggled = payload => {
    return { type: 'todos/todosToggled', payload }
}
export const todosDeleted = payload => {
    return { type: 'todos/todosDeleted', payload }
}
export const todosSearched = payload => {
    return { type: 'todos/todosSearched', payload }
}
export const todosLoaded = payload => {
    return { type: 'todos/todosLoaded', payload }
}

export const fetchTodos = () => async (dispatch) => {
    const response = await axios.get('http://localhost:9000/todos')
    dispatch(todosLoaded(response.data))
}

export const saveNewTodos = (text) => async (dispatch) => {
    const initalTodo = { name: text, completed: false }
    const response = await axios.post('http://localhost:9000/todos', initalTodo)

    dispatch(todosAdded(response.data))
}

export const deleteTodo = id => async (dispatch) => {
    await axios.delete(`http://localhost:9000/todos/${id}`)
    dispatch(todosDeleted(id))
}
export const selectedTodoByIds = (state, todoId) => {
    return state.todos.find(todo => todo.id === todoId)
}

export const selectedTodoId = createSelector(
    state => state.todos,
    todos => todos.map(todo => todo.id)
)

export const selectedFilterTodo = createSelector(
    state => state.todos,
    state => state.filters.status,

    (todos, status) => {
        if (status === StatusFilters.Completed) {
            return todos.filter(todo => todo.completed)
        }
        if (status === StatusFilters.Active) {
            return todos.filter(todo => !todo.completed)
        }
        return todos
    }
)

export const selectedFilterTodoId = createSelector(
    selectedFilterTodo,
    filters => filters.map(todo => todo.id)
)