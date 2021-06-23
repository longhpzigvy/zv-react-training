import { createSlice, createSelector } from '@reduxjs/toolkit'
import { StatusFilters } from "../filters/filtersSlice";
import axios from 'axios'

const initialState = []

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todosAdded(state, action) {
            return [...state, action.payload]
        },
        todosToggled(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        todosDeleted(state, action) {
            return state.filter(todo => todo.id !== action.payload)
        },
        todosSearch(state, action) {
            return state.filter(todo => todo.name.includes(action.payload))
        },
        todosLoaded(state, action) {
            return action.payload
        },
    }
})

export const {
    todosAdded,
    todosDeleted,
    todosLoaded,
    todosToggled,
    todosSearch,
} = todosSlice.actions
export default todosSlice.reducer

export const fetchTodos = () => async (dispatch) => {
    const response = await axios.get('http://localhost:9000/todos')
    dispatch(todosLoaded(response.data))
}

export const saveNewTodos = (text) => async (dispatch) => {
    const initalTodo = { name: text, completed: false }
    const response = await axios.post('http://localhost:9000/todos', initalTodo)

    dispatch(todosAdded(response.data))
}

export const deleteTodo = id =>async(dispatch)=>{
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