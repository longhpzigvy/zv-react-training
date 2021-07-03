import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducer/userReducer";

const persistConfig = {
    key: "root",
    storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducer);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
