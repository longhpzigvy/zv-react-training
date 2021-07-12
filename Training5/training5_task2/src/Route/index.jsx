import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BasicLayout from "../layout";
import PrivateRoute from "./PrivateRoute";
import HomePage from "../pages/Home";
import UserPage from "../pages/Users";
import UserListPage from "../pages/Users/UserListDetail";
import MyInfoPage from "../pages/My-Info";
import Login from "../pages/Login";

const RoutePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        
        <PrivateRoute path="/">
          <BasicLayout>
            <Switch>
              <Route exact path="/app" component={HomePage} />
              <Route path="/app/users">
                <UserPage>
                  <Switch>
                    <Route path="/app/users/:id" component={UserListPage} />
                    <Redirect to="/app/users" />
                  </Switch>
                </UserPage>
              </Route>
              <Route exact path="/app/my-info" component={MyInfoPage} />
              <Redirect to="/app" />
            </Switch>
          </BasicLayout>
        </PrivateRoute>
        
      </Switch>
    </Router>
  );
};

export default RoutePage;
