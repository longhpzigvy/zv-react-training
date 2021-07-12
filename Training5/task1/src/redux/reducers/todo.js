import { createSelector } from '@reduxjs/toolkit'
import { StatusFilters } from "./filter";
import axios from 'axios'

const initialState = {
    isLoading: false,
    entities: []
}


export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todosAdded': {
            return {
                ...state,
                isLoading: false,
                entities: [...state.entities, action.payload]
            }
        }
        case 'todos/todosToggled': {
            return {
                ...state,
                entities: state.entities.map(
                    (todo) => {
                        if (todo.id === action.payload) {
                            return { ...todo, completed: !todo.completed }
                        }
                        return todo
                    }
                )
            }
        }
        case 'todos/todosUpdated': {
            return {
                ...state,
                isLoading: false,
                entities: state.entities.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...action.payload }
                    }
                    return todo
                })
            }
        }
        case 'todos/todosDeleted': {
            return {
                ...state,
                isLoading: false,
                entities: state.entities.filter(todo => todo.id !== action.payload)
            }
        }
        case 'todos/todosLoading': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'todos/todosLoaded': {
            return {
                ...state,
                isLoading: false,
                entities: [...action.payload]
            }
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
export const todosUpdated = payload => {
    return { type: 'todos/todosUpdated', payload }
}

export const todosDeleted = payload => {
    return { type: 'todos/todosDeleted', payload }
}
export const todosLoading = () => {
    return { type: 'todos/todosLoading', }
}
export const todosLoaded = payload => {
    return { type: 'todos/todosLoaded', payload }
}

const API_ROOT = 'http://localhost:9000/todos'

const instance = axios.create({
    baseURL: API_ROOT,
})


export const fetchTodos = () => async (dispatch) => {
    dispatch(todosLoading())
    const response = await instance.get('/')
    dispatch(todosLoaded(response.data))
}

export const saveNewTodos = (text) => async (dispatch) => {
    dispatch(todosLoading())
    const initalTodo = { name: text, completed: false }
    const response = await instance.post('/', initalTodo)

    dispatch(todosAdded(response.data))
}

export const updateTodo = ({ id, text }) => async (dispatch) => {
    dispatch(todosLoading())
    const initalTodo = { name: text }
    const response = await instance.put(`/${id}`, initalTodo)
    dispatch(todosUpdated(response.data))
}

export const deleteTodo = id => async (dispatch) => {
    dispatch(todosLoading())
    await instance.delete(`/${id}`)
    dispatch(todosDeleted(id))
}
export const selectedTodoById = (state, todoId) => {
    return state.todos.entities.find(todo => todo.id === todoId)
}

export const selectedTodoIds = createSelector(
    state => state.todos.entities,
    todos => todos.map(todo => todo.id)
)

export const selectedFilterTodo = createSelector(
    state => state.todos.entities,
    state => state.filters.status,
    state => state.filters.name,

    (todos, status, name) => {
        if (name) {
            return todos.filter(todo => todo.name.includes(name))
        }
        if (status === StatusFilters.Completed) {
            return todos.filter(todo => todo.completed)
        }
        if (status === StatusFilters.Active) {
            return todos.filter(todo => !todo.completed)
        }
        return todos
    }
)

export const selectedFilterTodoIds = createSelector(
    selectedFilterTodo,
    filters => filters.map(todo => todo.id)
)


