import { combineReducers } from 'redux'
import authorization from './authorization'
import users from './users'
import user from './user'

const rootReducer = combineReducers({
    authorization,
    users,
    user
})

export default rootReducer