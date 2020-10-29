import {takeLatest, delay, put} from 'redux-saga/effects';
import * as taskTypes from '../Constants/index';
import * as Actions from '../Actions';

// function* watchFetchListTaskAction() {
//     yield take(taskTypes.FETCH_TASK);
//     //block
//     const resp = yield call(getList)//call 1 function
//     //block cho den khi call xong
//     console.log('resp:', resp)
//     const {data, status} = resp;
//     if(status === STATUS_CODE.SUCCESS){
//         //dispatch action fetch list task success
//         console.log('success');
//     } else {
//         //dispatch action fetch list task failure
//         console.log('failure');
//     }
// }


function* getUserAccount({payload}) {
    yield delay(500);
    const account = payload.acc;
    yield put(Actions.checkUserAccount(account));
}

function* rootSaga() {
    yield takeLatest(taskTypes.GET_USER_ACCOUNT, getUserAccount)
}

export default rootSaga;