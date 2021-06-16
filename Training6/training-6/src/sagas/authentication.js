import { call, put } from "redux-saga/effects";
import { login } from "../services/authentication";
import * as types from "../actions/types";

export function* loginSaga(payload) {
  try {
    const res = yield call(login, payload);
    yield put({ type: types.LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, payload: error });
  }
}
