import { eventChannel } from "redux-saga";
import { call, put, take, select, delay, all } from "redux-saga/effects";
import { getTasks, createTask } from "../services";
import * as types from "../actions/types";
import * as selectors from "./selectors";

export function* getTasksSaga() {
  try {
    const res = yield call(getTasks);
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

export function* submitReadyTasks() {
  yield take("NETWORK_CHANGE_ONLINE");
  const tasks = yield select(selectors.getTasks);
  const readyTasks = tasks.filter((task) => task.status === "Ready");
  const actions = yield readyTasks.map((task) => {
    return put({
      type: types.CHANGE_TASK_STATUS,
      payload: { id: task.id, status: "Submitting" },
    });
  });
  yield all(actions);
}

export function* checkNetworkAndSubmit() {
  if (navigator.onLine) {
    yield call(submitReadyTasks);
  }
}

export function* handleChangeStatus(action) {
  yield delay(2000);
  if (action.payload.status === "Submitting") {
    yield call(submitTask, action);
    return;
  }
  if (action.payload.status === "Ready") {
    if (navigator.onLine) {
      yield put({
        type: types.CHANGE_TASK_STATUS,
        payload: { id: action.payload.id, status: "Submitting" },
      });
    }
  }
}

function* submitTask(action) {
  try {
    const status = ["Error", "Success"][
      Math.floor(Math.random() * ["Error", "Success"].length)
    ];
    yield put({
      type: types.CHANGE_TASK_STATUS,
      payload: { id: action.payload.id, status: status },
    });
  } catch (error) {
    yield put({ type: types.CHANGE_TASK_STATUS, payload: error });
  }
}

export function* initEvenChannelForNetwork(action) {
  const channel = eventChannel((emit) => {
    const handleConnectivityChange = (isConnected) => {
      if (isConnected) {
        emit(isConnected);
      }
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
    yield put({ type: "NETWORK_CHANGE_ONLINE" });
  }
}
