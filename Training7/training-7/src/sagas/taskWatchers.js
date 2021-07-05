import { takeEvery, takeLatest, all } from "redux-saga/effects";
import {
  getTasksSaga,
  createTaskSaga,
  initEvenChannelForNetwork,
  checkNetworkAndSubmit,
  handleChangeStatus,
  submitReadyTasks,
} from "./task";
import * as types from "../actions/types";

export function* watchTask() {
  yield all([
    yield takeLatest(types.GET_TASKS_REQUEST, getTasksSaga),
    yield takeLatest(types.CREATE_TASK_REQUEST, createTaskSaga),
    yield takeLatest(types.NETWORK_CHANGE_ONLINE, submitReadyTasks),
    yield takeEvery(types.CHANGE_TASK_STATUS, handleChangeStatus),
    initEvenChannelForNetwork(),
    checkNetworkAndSubmit(),
  ]);
}
