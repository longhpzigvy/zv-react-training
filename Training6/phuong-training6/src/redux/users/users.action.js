import { createAction } from "redux-actions";
import {GET_PROFILE, GET_PROFILE_SUCCEED, GET_USERS, GET_USERS_SUCCEED} from "./users.type"

export const getProfile = createAction(
    GET_PROFILE
)

export const getProfileSucceed = createAction(
    GET_PROFILE_SUCCEED,
    res => res
)

export const getUsers = createAction(
    GET_USERS
)

export const getUsersSucceed = createAction(
    GET_USERS_SUCCEED,
    res => res
)