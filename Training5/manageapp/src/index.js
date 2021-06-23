import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import rootSaga from "./redux/sagas/rootSaga";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, sagaMiddleware } from "./redux/store/index";
import { store } from "./redux/store/index";

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
