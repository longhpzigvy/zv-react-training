import axios from "axios"
import {store} from '../store'

const API_ROOT = 'http://localhost:9000/api'



export const fetchLoginApi = async (payload) => {
    return await axios.post('http://localhost:9000/login', payload)
}

const instance = axios.create({
    baseURL: API_ROOT
})

instance.interceptors.request.use((config) => {
    console.log('store :>> ', store);
    const token = store.getState().authorization.token

    config.headers.Authorization = 'Bearer ' + token
    return config

}, (err) => { return Promise.reject(err) })

instance.interceptors.response.use(res => {
    return res

}, err => {
    if (err.response.status === 401) {
        return err.response
    }
    return Promise.reject(err);
})

export const fetchUsers = async () => {

    return await instance.get('/users')
}

export const fetchUser = async () => {

    return await instance.get('/users/my')
}