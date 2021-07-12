// import { delay } from 'redux-saga'
import { call, put, takeLatest, select, take, all, takeEvery } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { changeTaskStatus } from '../action Creators/task'
import { CHANGE_TASK_STATUS } from '../actionTypes/tasks'
import { READY, SUBMITTING, SUCCESS, ERROR } from '../../contant/taskStatus'
import { CHANGE_NETWORK_STATUS } from '../actionTypes/network'
import { changeNetworkStatus } from '../action Creators/network'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

const checkNetworkStatus = () => {
    return eventChannel((emitter) => {
        const updateOfflineNetwork = e => {
            console.log("Offline");
            return emitter({
                type: "LISTEN_NETWORK",
                payload: window.navigator.onLine,
            });

        }

        const updateOnlineNetwork = e => {
            console.log("Online");
            return emitter({
                type: "LISTEN_NETWORK",
                payload: window.navigator.onLine,
            });

        }

        window.addEventListener("offline", updateOfflineNetwork);
        window.addEventListener("online", updateOnlineNetwork);
        return () => {
            window.removeEventListener("offline", updateOfflineNetwork);
            window.removeEventListener("online", updateOnlineNetwork);
        };
    })
}

function* watchNetworkStatus() {
    const chan = yield call(checkNetworkStatus)
    
    
    while (true) {
        const action = yield take(chan)
        yield put(changeNetworkStatus(action.payload))
    }
}

function* handleReady(action) {
    const network = yield select(state => state.network.status)

    if (network) {
        return yield put(changeTaskStatus({ id: action.payload.id, status: SUBMITTING }))
    }
}

function* handleSubmitted(action) {

    const random = Math.floor(Math.random() * 2)
    console.log('random :>> ', random);
    yield delay(2000)

    if (random === 1) {
        return yield put(changeTaskStatus({ id: action.payload.id, status: SUCCESS }))
    }
    yield put(changeTaskStatus({ id: action.payload.id, status: ERROR }))
}

function* checkAllReadyTasks(action) {
    if (action.payload) {

        const readyTasks = yield select(state => state.tasks.filter(task => task.status === READY))
        for (let i = 0; i < readyTasks.length; i++) {
            yield put(changeTaskStatus({ id: readyTasks[i].id, status: SUBMITTING }))

        }
    }
}



export default function* rootSaga() {
    yield all([
        yield takeLatest(
            (action) => action.type === CHANGE_TASK_STATUS && action.payload.status === READY, handleReady),
        yield takeLatest(
            (action) => action.type === CHANGE_TASK_STATUS && action.payload.status === SUBMITTING, handleSubmitted),
        yield takeLatest(CHANGE_NETWORK_STATUS, checkAllReadyTasks),
        watchNetworkStatus()
    ])

}