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
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/">
                    <BasicLayout >
                        <Switch>
                            <PrivateRoute path="/app/my-info" component={MyInfoPage} />

                            <PrivateRoute path="/app/users"  >
                                <UserPage>
                                    <PrivateRoute path="/app/users/:id" component={UserListPage} />
                                </UserPage>
                            </PrivateRoute>
                            <PrivateRoute path="/app" component={HomePage} />
                        </Switch>
                    </BasicLayout>

                </PrivateRoute>


            </Switch>
        </Router>
    )
}

export default RoutePage