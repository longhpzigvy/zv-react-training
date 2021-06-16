import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import MainContent from "./components/MainContent";
import SubContent from "./components/SubContent";
import MyLayout from "./hoc/MyLayout";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Switch>
              <MyLayout>
                <Route exact path="/app" component={Home} />
                <Route path="/app/users" component={MainContent} />
                <Route
                  path={["/app/myinfo", "/app/users/:id"]}
                  component={SubContent}
                />
              </MyLayout>
            </Switch>
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
