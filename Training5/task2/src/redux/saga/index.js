import { all } from 'redux-saga/effects'
import authorizationSaga from './authorization'
import  userSaga  from './users'

export default function* rootSaga() {
    yield all([
        authorizationSaga(),
        userSaga()
    ])
}