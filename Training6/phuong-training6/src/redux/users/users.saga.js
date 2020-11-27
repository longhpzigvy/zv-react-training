import { fork, call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import {GET_PROFILE, GET_USERS} from "./users.type"
import {getMyProfileAsync, getUsersAsync} from "../../services/users.service"
import {getProfileSucceed, getUsersSucceed} from "./users.action"

function* getProfileWorker() {
    try {
        const {data} = yield call(getMyProfileAsync)
        yield put(getProfileSucceed(data))
    } catch (error) {
        console.log("[getProfileWorker]", error)
    }
}

function* getUsersWorker() {
    try {
        const {data} = yield call(getUsersAsync)
        yield put(getUsersSucceed(data))
    } catch (error) {
        console.log("[getUsersWorker]", error)
    }
}

function* getProfileWatcher() {
    yield takeLatest(GET_PROFILE, getProfileWorker)
}

function* getUsersWatcher() {
    yield takeLatest(GET_USERS, getUsersWorker)
}

export default [
    fork(getProfileWatcher),
    fork(getUsersWatcher)
]