import {delay, put, call, takeLatest} from 'redux-saga/effects';
import * as taskTypes from '../Constants/index';
import * as Actions from '../Actions';
import {APIauthorize} from '../API/api';

function* authorize(user, password) {
    try {
        const token = yield call(APIauthorize, user, password);
        return token;
    } catch(err) {
        return err;
    }
}


function* loginRequest({payload}) {
    yield delay(500);
    const {user, password} = payload;
    const token = yield call(authorize, user, password);
    if(token.data.token){
        yield put(Actions.loginSuccess());
    } else {
        yield put(Actions.loginFailure(token.data.error));
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