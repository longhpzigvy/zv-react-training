import { handleActions } from "redux-actions";
import {userLoginSucceed} from "./auth.action"

export const initialAuthState = {
    isLoggedIn: false,
    token: "",
    fullName: "",
    role: ""
}

export const authReducer = handleActions(
    new Map([
        [
            userLoginSucceed,
            (state, action) => ({
                ...state,
                ...action.payload,
                isLoggedIn: true
            })
        ]
    ]),
    initialAuthState
)