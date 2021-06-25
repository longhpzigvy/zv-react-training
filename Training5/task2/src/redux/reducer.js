import { combineReducers } from 'redux'
import authReducer from './auth/authSlice'
import userReduce from './user/userReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReduce
})

export default rootReducer