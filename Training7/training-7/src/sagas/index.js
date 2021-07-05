import { fork, all } from "redux-saga/effects";
import { watchTask } from "./taskWatchers";

export default function* rootSaga() {
  yield all([fork(watchTask)]);
}
