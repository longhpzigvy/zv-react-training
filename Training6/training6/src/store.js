import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//root reducer
import myReducer from './Reducers/index';
//root saga
import rootSaga from './Sagas/index';
//redux dev tool
import {composeWithDevTools} from 'redux-devtools-extension';
//create redux saga
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, myReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga); //run root saga