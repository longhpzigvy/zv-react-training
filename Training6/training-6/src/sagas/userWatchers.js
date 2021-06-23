import { takeLatest } from "redux-saga/effects";
import { fetchUsersSaga, fetchUserSaga } from "./user";

import * as types from "../actions/types";

export function* watchUser() {
  yield takeLatest(types.FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(types.FETCH_USER_REQUEST, fetchUserSaga);
}