import { call, put, takeLatest } from 'redux-saga/effects'
import {
    getUsersSuccess,
    getUsersError,
    getUserSuccess,
    getUserError
} from '../actionCreators/users'
import { GET_USER, GET_USERS } from '../actionTypes/users'
import { fetchUsers, fetchUser } from '../apiService/api'

function* getUsersSaga() {

    try {
        const res = yield call(fetchUsers)
        yield put(getUsersSuccess(res.data.users))
    } catch (error) {
        yield put(getUsersError(error))
    }
}

function* getUserSaga() {

    try {
        const res = yield call(fetchUser)
        yield put(getUserSuccess(res.data))
    } catch (error) {
        yield put(getUserError(error))
    }
}

export default function* userSaga() {
    yield takeLatest(GET_USERS, getUsersSaga)
    yield takeLatest(GET_USER, getUserSaga)

}
