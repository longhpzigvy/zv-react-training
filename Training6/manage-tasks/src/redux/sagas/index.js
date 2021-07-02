// import { delay } from 'redux-saga'
import { call, put, takeLatest, select, take, all, takeEvery } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { changeTaskStatusSubmitting, changeTaskStatusSuccess, changeTaskStatusError} from '../action Creators/task'
import { CHANGE_TASK_STATUS_READY, CHANGE_TASK_STATUS_SUBMITTING } from '../actionTypes/tasks'
import { READY } from '../../contant/taskStatus'
import { CHANGE_NETWORK_STATUS } from '../actionTypes/network'
import { changeNetworkStatus } from '../action Creators/network'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

const checkNetworkStatus = () => {
    return eventChannel((emitter) => {
        const updateOfflineNetwork = () => {
            window.addEventListener("offline", function (e) {
                console.log("offline");
                return emitter({
                    type: "LISTEN_NETWORK",
                    payload: window.navigator.onLine,
                });
            });
        };
        const updateOnlineNetwork = () => {
            window.addEventListener("online", function (e) {
                console.log("online");
                return emitter({
                    type: "LISTEN_NETWORK",
                    payload: window.navigator.onLine,
                });
            });
        };
        updateOfflineNetwork();
        updateOnlineNetwork();
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
        return yield put(changeTaskStatusSubmitting(action.payload))
    }
}

function* handleSubmitted(action) {
    const random = Math.floor(Math.random() * 2)
    console.log('random :>> ', random);
    yield delay(2000)

    if (random === 1) {
        return yield put(changeTaskStatusSuccess(action.payload))
    }
    yield put(changeTaskStatusError(action.payload))
}

function* checkAllReadyTasks(action) {
    if (action.payload) {

        const readyTasks = yield select(state => state.tasks.filter(task => task.status === READY))
        for (let i = 0; i < readyTasks.length; i++) {
            yield put(changeTaskStatusSubmitting(readyTasks[i].id))

        }
    }
}



export default function* rootSaga() {
    yield all([
        yield takeLatest(CHANGE_TASK_STATUS_READY, handleReady),
        yield takeEvery(CHANGE_TASK_STATUS_SUBMITTING, handleSubmitted),
        yield takeLatest(CHANGE_NETWORK_STATUS, checkAllReadyTasks),
        watchNetworkStatus()
    ])

}