import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { ACTION_NAMES } from "../action/ActionNames";
import { BASE_URL } from "../../utils/Config";
function* LoginUser(action) {
    try {
        const result = yield call(axios.post, `${BASE_URL}login`, {
            email: action.data.email,
            password: action.data.password,
        });
        const data = result.data;
        if (data.error !== "Incorrect password or email") {
            yield put({ type: "SAGA_LOGIN_USER", data: data });
            window.location.replace("/home");
        }
    } catch (err) {
        console.error(err);
    }
}
export function* LoginUserWatch() {
    yield takeEvery(ACTION_NAMES.LOGIN_USER, LoginUser);
}
function* getAllUsersInfo(action) {
    try {
        const result = yield call(axios.get, `${BASE_URL}api/users`, {
            headers: {
                Authorization: `Bearer ${action.data}`,
            },
        });
        const data = result.data.users;
        yield put({ type: "SAGA_GET_ALL_USERS_INFO", data });
    } catch (err) {
        console.error(err);
    }
}

export function* getAllUsersInfoWatch() {
    yield takeEvery(ACTION_NAMES.GET_ALL_USERS_INFO, getAllUsersInfo);
}
function* GetAccountInfo(action) {
    try {
        const result = yield call(axios.get, `${BASE_URL}api/users/my`, {
            headers: {
                Authorization: `Bearer ${action.data}`,
            },
        });
        const data = result.data;
        yield put({ type: "SAGA_GET_ACCOUNT_INFO", data });
    } catch (err) {
        console.error(err);
    }
}
export function* GetAccountInfoWatcher() {
    yield takeEvery(ACTION_NAMES.GET_ACCOUNT_INFO, GetAccountInfo);
}
