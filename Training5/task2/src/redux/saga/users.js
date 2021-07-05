import { call, put, takeLatest } from 'redux-saga/effects'
import {
    getUsersSuccess,
    getUserSuccess,
} from '../actionCreators/users'
import { GET_USER, GET_USERS } from '../actionTypes/users'
import { fetchUsers, fetchUser } from '../apiService/api'

function* getUsersSaga() {

    try {
        const res = yield call(fetchUsers)
        yield put(getUsersSuccess(res.data))
    } catch (error) {
        console.log('error :>> ', error);
    }
}

function* getUserSaga() {

    try {
        const res = yield call(fetchUser)
        yield put(getUserSuccess(res.data))
    } catch (error) {
        console.log('error :>> ', error);
    }
}

export default function* userSaga() {
    yield takeLatest(GET_USERS, getUsersSaga)
    yield takeLatest(GET_USER, getUserSaga)

}
