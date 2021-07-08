import { put, call, takeEvery } from "redux-saga/effects";
import { ACTION_NAMES } from "../action/ActionNames";
import { login, getUsers, getUser } from "../../utils/Interceptors";
function* LoginUser(action) {
    try {
        const result = yield call(login, action);
        const data = result.data;
        if (data.error !== "Incorrect password or email") {
            yield put({ type: ACTION_NAMES.LOGIN_USER_SUCCESS, data: data });
            window.location.replace("/home");
        }
    } catch (err) {
        yield put({ type: ACTION_NAMES.LOGIN_USER_ERROR });
    }
}

export function* LoginUserWatch() {
    yield takeEvery(ACTION_NAMES.LOGIN_USER, LoginUser);
}

function* getAllUsersInfo(action) {
    try {
        const result = yield call(getUsers);
        const data = result.data.users;
        yield put({ type: ACTION_NAMES.GET_ALL_USERS_INFO_SUCCESS, data });
    } catch (err) {
        yield put({ type: ACTION_NAMES.GET_ALL_USERS_INFO_ERROR, err });
    }
}

export function* getAllUsersInfoWatch() {
    yield takeEvery(ACTION_NAMES.GET_ALL_USERS_INFO, getAllUsersInfo);
}

function* GetAccountInfo(action) {
    try {
        const result = yield call(getUser);
        const data = result.data;
        yield put({ type: ACTION_NAMES.GET_ACCOUNT_INFO_SUCCESS, data });
    } catch (err) {
        yield put({ type: ACTION_NAMES.GET_ACCOUNT_INFO_ERROR });
    }
}

export function* GetAccountInfoWatcher() {
    yield takeEvery(ACTION_NAMES.GET_ACCOUNT_INFO, GetAccountInfo);
}
