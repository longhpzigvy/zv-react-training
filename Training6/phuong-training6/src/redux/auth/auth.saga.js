import { fork, call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import {USER_LOGIN, USER_LOGOUT} from "./auth.type"
import {loginAsync} from "../../services/auth.service"
import {userLoginSucceed, userLogoutSucceed} from "./auth.action"
import customHistory from "../../utils/history"
import {persistor} from "../../redux/store"

function* loginWorker(action) {
    try {
        const {data} = yield call(loginAsync, action.payload)
        yield put(userLoginSucceed(data))
        customHistory.push("/app")
    } catch (error) {
        console.log("[loginWorker]", error)
    }
}

function* logoutWorker() {
    try {
        yield put(userLogoutSucceed());
        yield call(setTimeout, persistor.purge, 200);
        customHistory.push("/login")
    } catch (error) {
        console.log("[logoutWorker]", error)
    }
}

function* loginWatcher() {
    yield takeLatest(USER_LOGIN, loginWorker)
}

function* logoutWatcher() {
    yield takeLatest(USER_LOGOUT, logoutWorker)
}

export default [
    fork(loginWatcher),
    fork(logoutWatcher)
]