import "./App.css";
import { createBrowserHistory } from "history";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import PageLogin from "./Pages/Login/PageLogin";
import Home from "./Pages/Home/Home";

export const history = createBrowserHistory();

function App() {
    const user = useSelector((state) => {
        return state.userToken;
    });

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/login">
                    <PageLogin />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Redirect to={user ? "/home" : "/login"} />
            </Switch>
        </Router>
    );
}

export default App;
