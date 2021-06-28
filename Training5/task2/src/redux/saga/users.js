import { fork, call, put, take, takeLatest, all } from 'redux-saga/effects'
import { 
    getUsers, 
    getUsersSuccess, 
    getUsersError ,
    getUser,
    getUserSuccess,
    getUserError
} from '../actionCreators/users'
import { fetchUsers,fetchUser } from '../apiService/api'

function* getUsersSaga() {
    yield put(getUsers())

    try {
        const res = yield call(fetchUsers)
        yield put(getUsersSuccess(res.data.users))
    } catch (error) {
        yield put(getUsersError(error))
    }
}

function* getUserSaga(){
    yield put(getUser())

    try {
        const res =yield call(fetchUser)
        yield put(getUserSuccess(res.data))
    } catch (error) {
        yield put(getUserError(error))
    }
}

export default function* userSaga() {
    yield takeLatest('GET_USERS_SAGA', getUsersSaga)
    yield takeLatest('GET_USER_SAGA', getUserSaga)

}
