import { fork, call, put, take, takeLatest, all } from 'redux-saga/effects'

// import axios from 'axios'
import { getToken, getTokenSuccess } from '../actionCreators/authorization'
import { fetchLoginApi } from '../apiService/api'


function* getTokenSaga(action) {
    yield put(getToken())

    try {
        const res = yield call(fetchLoginApi, action.payload)
        yield put(getTokenSuccess(res.data))
    } catch (error) {
        console.log('error :>> ', error);
    }
}

export default function* authorizationSaga() {
    yield takeLatest('GET_TOKEN_SAGA', getTokenSaga)
}

