import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./routes/Home";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./routes/Login";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return store.getState().user ? (
                  <Redirect to="/app" />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            <Route path="/app" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
