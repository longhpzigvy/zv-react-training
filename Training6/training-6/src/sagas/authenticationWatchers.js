import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./authentication";

import * as types from "../actions/types";

export function* watchAuthentication() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}
