import {handleActions} from "redux-actions"
import {getProfileSucceed, getUsersSucceed} from "./users.action"

export const initialUsersState = {
    myProfile: {
        fullName: "",
        email: "",
        id: "",
        role: ""
    },
    listUser: []
}

export const usersReducer = handleActions(
    new Map([
        [
            getProfileSucceed,
            (state, action) => ({
                ...state,
                myProfile: {
                    ...state.myProfile,
                    ...action.payload
                }
            })
        ],
        [
            getUsersSucceed,
            (state, action) => ({
                ...state,
                listUser: action.payload.users
            })
        ]
    ]),
    initialUsersState
)