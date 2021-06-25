import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    errors: '',
    token: '',
    entities: {
        users: [],
        user: {}
    }
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'users/addToken': {
            return {
                ...state,
                token: action.payload.token ? action.payload.token : null,
                errors: action.payload.error ? action.payload.error : null
            }
        }
        case 'users/getUsers': {
            return { ...state, entities: { ...state.entities, users: [...action.payload] } }
        }
        case 'users/getUser': {
            return { ...state, entities: { ...state.entities, user: { ...action.payload } } }
        }
        default:
            return state
    }
}


export const fetchLogin = (user) => async (dispatch, getState) => {
    const response = await axios.post('http://localhost:9000/login', user)
    dispatch({ type: 'users/addToken', payload: response.data })
}

export const fetchUsers = (token) => async (dispatch) => {
    axios.interceptors.request.use(config => {
        config.headers.authorization = 'Bearer ' + token
        return config
    })
    const response = await axios.get('http://localhost:9000/api/users')
    dispatch({ type: 'users/getUsers', payload: response.data.users })

}

export const fetchUser = (token) => async (dispatch) => {
    axios.interceptors.request.use(config => {
        config.headers.authorization = 'Bearer ' + token
        return config
    })
    const response = await axios.get('http://localhost:9000/api/users/my')
    dispatch({ type: 'users/getUser', payload: response.data })
}