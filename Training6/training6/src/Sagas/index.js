import {put, call, takeLatest} from 'redux-saga/effects';
import * as taskTypes from '../Constants/index';
import * as Actions from '../Actions';
import { APIauthorize } from '../API/api';
function* loginRequest({payload}) {
    try {
        const { user, password } = payload;
        const response = yield call(APIauthorize, user, password);
        if(response.data.token){
            yield put(Actions.loginSuccess());
        } else {
            yield put(Actions.loginFailure(response.data.error));
        }
    } catch (error) {
        yield put(Actions.loginFailure(error.message || 'Unexpected error'));
    }
}
function* rootSaga() {
    yield takeLatest(taskTypes.LOGIN_REQUEST, loginRequest);
}
export default rootSaga;
//[{
//     fullName: 'John Doe',
//     email: 'john@doe.com',
//     password: 'zigvy123',
//     id: 'fb3111f1-ea6e-11e9-ba42-2368758065ba',
//     role: 'Admin',
//   }, {
//     fullName: 'John Smith',
//     email: 'john@smith.com',
//     password: 'zigvy123',
//     id: '781f9a70-ea6e-11e9-a9a5-4d422b2ea8f4',
//     role: 'User',
//}]