import {  call, put, takeLatest } from 'redux-saga/effects'

import { GET_TOKEN, GET_TOKEN_SUCCESS} from '../../constants/ActionTypes'
import { fetchLoginApi } from '../apiService/api'




function* getTokenSaga(action) {

    try {
         //gọi api
         //action là 1 object gồm type: GET_TOKEN và payload (object email và password)
        const res = yield call(fetchLoginApi, action.payload)
        console.log('res singn in', res.data)
        //put() là dispatch một action
        yield put({
            type: GET_TOKEN_SUCCESS,
            payload: res.data,
        })
    } catch (error) {
        console.log('error :>> ', error);
    }
}

export default function* authorizationSaga() {
    //takeLastest thực thi và trả lại kết quả mọi action cuối cùng
    //mỗi lần user gửi action GET_TOKEN thì sẽ chạy hàm getTokenSaga
    yield takeLatest(GET_TOKEN, getTokenSaga)
}

