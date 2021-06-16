import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const MyTransformer = createTransform(
  (inboundState, key) => ({ ...inboundState }),
  (outboundState, key) => {
    if (key === "authentication") {
      return {
        ...outboundState,
        user: outboundState.user
          ? outboundState.user.exp * 1000 > Date.now() && outboundState.user
          : null,
        token: outboundState.user
          ? outboundState.user.exp * 1000 > Date.now() && outboundState.token
          : null,
      };
    }
    return { ...outboundState };
  },
  {}
);

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [MyTransformer],
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, composeEnhancers(middleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
