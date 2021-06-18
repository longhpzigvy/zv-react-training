import React from "react";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import { PersistGate } from "redux-persist/integration/react";
import rootSaga from "./redux/saga/rootSaga";
import { store, persistor, sagaMiddleware } from "./redux/store";
import ToDoPage from "./components/ToDoPage";
sagaMiddleware.run(rootSaga);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div
                    style={{
                        height: 1000,
                        backgroundColor: "#282c34",
                        alignItems: "center",
                    }}
                >
                    <ToDoPage />
                </div>
            </PersistGate>
        </Provider>
    );
};

export default App;
