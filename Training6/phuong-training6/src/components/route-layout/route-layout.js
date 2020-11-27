import React from "react";
import { Route, Redirect } from "react-router-dom";
import LayoutCustom from "../layout/layout";
import {store} from "../../redux/store"

const RouteLayout = ({ component: Component, ...rest }) => {
  const isLoginPage = rest.path === "/login";
  const { isLoggedIn } = store.getState().auth;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedIn && !isLoginPage ? (
          <Redirect to="/login"/>
        ) : isLoggedIn && isLoginPage ? (
          <Redirect to="/app"/>
        ) : isLoginPage ? (
          <Component {...props}></Component>
        ) : (
          <LayoutCustom>
            <Component {...props}></Component>
          </LayoutCustom>
        )}
    />
  );
};

export default RouteLayout;