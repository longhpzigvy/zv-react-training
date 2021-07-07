import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducer/userReducer";
import logger from "redux-logger"; //! Logger with default options

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["userToken"],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
