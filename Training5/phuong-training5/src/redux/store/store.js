import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  keyPrefix: "",
  storage: storage,
  blacklist: ["loading"],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(middleware)
);

// Use to hydrate state from storage
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
