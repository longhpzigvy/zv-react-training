import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./authentication";
import { fetchUsersSaga, fetchUserSaga } from "./user";

import * as types from "../actions/types";

export function* watchAuthentication() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
  yield takeLatest(types.FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(types.FETCH_USER_REQUEST, fetchUserSaga);
}
