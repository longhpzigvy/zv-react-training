import { combineReducers } from 'redux'
import usersReducer from "./action";

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer