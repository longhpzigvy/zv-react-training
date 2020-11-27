import { createAction } from "redux-actions";
import {USER_LOGIN, USER_LOGIN_SUCCEED, USER_LOGOUT, USER_LOGOUT_SUCCEED} from "./auth.type"

export const userLogin = createAction(
    USER_LOGIN,
    req => req
)

export const userLoginSucceed = createAction(
    USER_LOGIN_SUCCEED,
    res => res
)

export const userLogout = createAction(
    USER_LOGOUT
)

export const userLogoutSucceed = createAction(
    USER_LOGOUT_SUCCEED
)