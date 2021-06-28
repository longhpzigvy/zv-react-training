import axios from "axios"
import store from '../store'

const API_ROOT = 'http://localhost:9000'

const instance = axios.create({
    baseURL: API_ROOT,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const fetchLoginApi = async (payload) => {
    return await instance.post('/login', payload)
}

export const fetchUsers = async () => {
    const token = store.getState().authorization.token

    return await instance.get('/api/users', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}

export const fetchUser = async () => {
    const token = store.getState().authorization.token

    return await instance.get('/api/users/my', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}