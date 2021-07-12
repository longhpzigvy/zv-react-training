import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

  const token = useSelector((state) => state.authorization.token);

  //private route có các thuộc tính như component Route (truyền tất cả props vào)
  //xác thực token

  return (
    <Route {...rest}
      render={() => (token ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
