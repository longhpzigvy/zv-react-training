import {
    take,
    all,
    put,
    call,
    takeEvery,
    select,
    delay,
} from "redux-saga/effects";
import eventNetwork from "./eventChannel";
export function* listenNetwork() {
    const channel = yield call(eventNetwork);
    while (true) {
        const payload = yield take(channel);
        yield put({
            type: "CHANGE_NETWORK_STATUS",
            payload: {
                channelStatus: payload.payload,
            },
        });
    }
}
function* handleSubmit(action) {
    try {
        yield delay(2000);
        const status = ["error", "complete"];
        const nextStatus = status[Math.floor(Math.random() * status.length)];
        yield put({
            type: "CHANGE_TASK_STATUS",
            payload: {
                task: action.payload.task,
                status: nextStatus,
            },
        });
    } catch (error) {}
}
function* checkIfSubmitTask(action) {
    const network = yield select((state) => state.channelStatus);
    if (action.payload.status === "ready" && network) {
        yield put({
            type: "CHANGE_TASK_STATUS",
            payload: {
                task: action.payload.task,
                status: "submitting",
            },
        });
    }
}
function* checkIfSubmitReadyTask(action) {
    if (action.payload.channelStatus) {
        const readyTasks = yield select((state) =>
            state.task.filter(({ status }) => status === "ready")
        );
        for (let i = 0; i < readyTasks.length; i += 1) {
            yield put({
                type: "CHANGE_TASK_STATUS",
                payload: {
                    task: readyTasks[i].task,
                    status: "submitting",
                },
            });
        }
    }
}
export function* taskSaga() {
    yield all([
        takeEvery(
            (action) =>
                action.type === "CHANGE_TASK_STATUS" &&
                action.payload.status === "ready",
            checkIfSubmitTask
        ),
        takeEvery("CHANGE_NETWORK_STATUS", checkIfSubmitReadyTask),
        takeEvery(
            (action) =>
                action.type === "CHANGE_TASK_STATUS" &&
                action.payload.status === "submitting",
            handleSubmit
        ),
        listenNetwork(),
    ]);
}
