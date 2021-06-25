import axios from "axios"

const initialState = {
    token: null,
    error: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'auth/addUser': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'auth/getToken': {
            return {
                token: action.payload.token ? action.payload.token : null,
                error: action.payload.error ? action.payload.error : null
            }
        }
        default:
            return state
    }
}


export default authReducer

//thunk function

export const fetchAuth = (user) => async (dispatch, getState) => {
    const response = await axios.post('http://localhost:9000/login', user)
    dispatch({ type: 'auth/getToken', payload: response.data })
}

export const fetchUsers = () => async (dispatch, getState) => {

    const token = getState().auth.token

    const response = await axios.get('http://localhost:9000/api/users', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    dispatch({ type: 'user/getUsers', payload: response.data.users })
}

export const fetchUser = () => async (dispatch, getState) => {

    const token = getState().auth.token

    const response = await axios.get('http://localhost:9000/api/users/my', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    dispatch({ type: 'user/getUser', payload: response.data })
}