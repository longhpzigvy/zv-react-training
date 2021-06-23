import "./App.css";

import { createBrowserHistory } from "history";

import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import PageLogin from "./Pages/Login/PageLogin";
import Home from "./Pages/Home/Home";

export const history = createBrowserHistory();

function App() {
    return (
        <div>
            <BrowserRouter history={history}>
                <Switch>
                    <Route component={Home} path="/home"></Route>
                    <Route component={PageLogin} exact path="/login" />
                    <Redirect from="/" to="/home" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
