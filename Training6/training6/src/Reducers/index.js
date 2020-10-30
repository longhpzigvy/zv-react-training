import {combineReducers} from 'redux';
import task from './task';
import { persistReducer } from 'redux-persist'
import logInStatus from './logInStatus';
import storage from 'redux-persist/lib/storage';
const loginPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['logInStatus']
  }
const myReducer = combineReducers({
    task,
    login: persistReducer(loginPersistConfig, logInStatus),
})
export default myReducer;