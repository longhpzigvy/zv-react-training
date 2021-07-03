import { all, fork } from "redux-saga/effects";
import {
    LoginUserWatch,
    getAllUsersInfoWatch,
    GetAccountInfoWatcher,
} from "./userSaga";

export default function* rootSaga() {
    yield all([
        fork(LoginUserWatch),
        fork(getAllUsersInfoWatch),
        fork(GetAccountInfoWatcher),
    ]);
}
