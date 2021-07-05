import { call, put } from "redux-saga/effects";
import { fetchUsers, fetchUser } from "../services";
import * as types from "../actions/types";

export function* fetchUsersSaga(payload) {
  try {
    const res = yield call(fetchUsers, payload);
    yield put({ type: types.FETCH_USERS_SUCCESS, payload: { data: res.data } });
  } catch (error) {
    yield put({ type: types.FETCH_USERS_FAILURE, payload: error });
  }
}

export function* fetchUserSaga(payload) {
  try {
    const res = yield call(fetchUser, payload);
    yield put({ type: types.FETCH_USER_SUCCESS, payload: res.data });
  } catch (error) {
    yield put({ type: types.FETCH_USER_FAILURE, payload: error });
  }
}
