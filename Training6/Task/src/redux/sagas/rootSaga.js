import { all } from "redux-saga/effects";
import * as task from "./taskSaga";
export default function* rootSaga() {
    yield all([task.taskSaga()]);
}
