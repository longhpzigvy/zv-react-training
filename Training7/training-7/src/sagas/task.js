import { eventChannel } from "redux-saga";
import { call, put, race, take, delay } from "redux-saga/effects";
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
    if (navigator.onLine)
      yield put({
        type: types.CHANGE_TASK_STATUS_SUCCESS,
        payload: syncAction.data,
      });
  }
}

function* delayNetworkStatus(interval) {
  let events = {
    interval: delay(interval * 1000),
  };

  yield race(events);
}

export function* changeTaskStatusSaga(payload) {
  const options = {
    syncAction: yield call(changeTaskStatus, payload),
    delayByInterval: 2,
  };

  if (options.delayByInterval > 0) {
    yield call(delayNetworkStatus, options.delayByInterval);
  }

  try {
    if (navigator.onLine) {
      const res = yield call(changeTaskStatus, payload);
      yield put({
        type: types.CHANGE_TASK_STATUS_SUCCESS,
        payload: res.data,
      });
    } else yield call(startChannel, options.syncAction);
  } catch (e) {
    console.log(e);
  }
}
