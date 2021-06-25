import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BasicLayout from "../layout";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/Home";
import UserPage from "../pages/Users";
import UserListPage from "../pages/Users/UserList";
import MyInfoPage from "../pages/My-Info";
import Login from "../pages/Login";

const RoutePage = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/app" component={HomePage} />
                <Route exact path="/app/users" component={UserPage} />
                <Route exact path="/app/my-info" component={MyInfoPage} />
                <Route exact path="/app/users/:id" component={UserListPage} />
                <Route exact path="/login" component={Login} />

                <PrivateRoute path="/">
                    <BasicLayout />
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

export default RoutePage