import { take, put, call } from "redux-saga/effects";
import Axios from "axios";

export function* LoginUserAPI() {
    const action1 = yield take("LOGIN_USER");

    let data = null;
    yield call(() => {
        return Axios.post("http://localhost:9000/login", {
            email: action1.values.email,
            password: action1.values.password,
        }).then((result) => {
            data = result.data;
            if (result.data.error !== "Incorrect password or email") {
                window.location.replace("/home");
            }
        });
    });

    if (data.error !== "Incorrect password or email") {
        yield put({ type: "LOGIN_USER", data: data });
    }
}

export function* getUsersAPI() {
    const action1 = yield take("GET_USERS");

    const apiCall = () => {
        return Axios.get("http://localhost:9000/api/users", {
            headers: {
                Authorization: `Bearer ${action1.values}`,
            },
        })
            .then((result) => {
                return result.data.users;
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    const data = yield call(apiCall);

    yield put({ type: "GET_USERS_SUCCESS", data: data });
}

export function* GetInfoAPI() {
    const action1 = yield take("GET_INFO");
    let data = null;
    yield call(() => {
        return Axios.get("http://localhost:9000/api/users/my", {
            headers: {
                Authorization: `Bearer ${action1.values}`,
            },
        })
            .then((result) => {
                data = result.data;
            })
            .catch((err) => console.log(err.response));
    });

    yield put({ type: "GET_INFO_SUCCESS", data: data });
}
