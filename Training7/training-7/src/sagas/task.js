import { eventChannel } from "redux-saga";
import { call, put, take, delay } from "redux-saga/effects";
import { getTasks, createTask, changeTaskStatus } from "../services";
import * as types from "../actions/types";

export function* getTasksSaga(payload) {
  try {
    const res = yield call(getTasks, payload);
    yield put({ type: types.GET_TASKS_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: types.GET_TASKS_FAILURE, payload: error });
  }
}

export function* createTaskSaga(payload) {
  try {
    const res = yield call(createTask, payload);
    yield put({ type: types.CREATE_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: types.CREATE_TASK_FAILURE, payload: error });
  }
}

function* startChannel(syncAction) {
  const channel = eventChannel((listener) => {
    const handleConnectivityChange = (isConnected) => {
      listener(isConnected);
    };

    navigator.connection.addEventListener("change", handleConnectivityChange);
    return () =>
      navigator.connection.removeEventListener(
        "change",
        handleConnectivityChange
      );
  });

  while (true) {
    yield take(channel);
    yield put({
      type: types.CHANGE_TASK_STATUS_SUCCESS,
      payload: syncAction.data,
    });
  }
}

export function* changeTaskStatusSaga(action) {
  let status = action.payload.status;
  let step = 0;

  try {
    while (step !== 3) {
      yield delay(1000);
      if (status === "Submitting" && !navigator.onLine) {
        const syncAction = yield call(changeTaskStatus, {
          payload: { id: action.payload.id, status: status },
        });
        yield call(startChannel, syncAction);
      } else {
        const res = yield call(changeTaskStatus, {
          payload: { id: action.payload.id, status: status },
        });
        yield put({
          type: types.CHANGE_TASK_STATUS_SUCCESS,
          payload: res.data,
        });
        status = res.data.status;
      }
      step++;
    }
  } catch (e) {
    console.log(e);
  }
}
