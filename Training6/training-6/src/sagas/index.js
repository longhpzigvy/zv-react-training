import { fork, all } from "redux-saga/effects";
import { watchAuthentication } from "./authenticationWatchers";
import { watchUser } from "./userWatchers";

export default function* rootSaga() {
  yield all([fork(watchAuthentication), fork(watchUser)]);
}
