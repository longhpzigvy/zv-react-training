import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PageLogin from "./Pages/Login/PageLogin";
import Home from "./Pages/Home/Home";
function App() {
    return (
        <Router>
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
