import { combineReducers } from "redux";
import {authReducer, initialAuthState} from "../auth/auth.reducer"
import {usersReducer, initialUsersState} from "../users/users.reducer"
import {USER_LOGOUT_SUCCEED} from "../auth/auth.type"

const allReducers = combineReducers({
    auth: authReducer,
    users: usersReducer
})

export const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT_SUCCEED) {
        state = {
            auth: initialAuthState,
            users: initialUsersState
        }
    }
    return allReducers(state, action)
}