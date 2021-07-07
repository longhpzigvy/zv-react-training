import "./App.css";
import { createBrowserHistory } from "history";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PageLogin from "./Pages/Login/PageLogin";
import Home from "./Pages/Home/Home";

export const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login">
                    <PageLogin />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
