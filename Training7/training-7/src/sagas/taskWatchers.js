import { takeEvery, takeLatest } from "redux-saga/effects";
import { getTasksSaga, createTaskSaga, changeTaskStatusSaga } from "./task";

import * as types from "../actions/types";

export function* watchTask() {
  yield takeLatest(types.GET_TASKS_REQUEST, getTasksSaga);
  yield takeLatest(types.CREATE_TASK_REQUEST, createTaskSaga);
  yield takeEvery(types.CHANGE_TASK_STATUS_REQUEST, changeTaskStatusSaga);
}
