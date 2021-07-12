import {  call, put, takeLatest } from 'redux-saga/effects'

import { getTokenSuccess } from '../actionCreators/authorization'
import { GET_TOKEN } from '../actionTypes/authorization'
import { fetchLoginApi } from '../apiService/api'


function* getTokenSaga(action) {

    try {
        const res = yield call(fetchLoginApi, action.payload)
        yield put(getTokenSuccess(res.data))
    } catch (error) {
        console.log('error :>> ', error);
    }
}

export default function* authorizationSaga() {
    yield takeLatest(GET_TOKEN, getTokenSaga)
}

