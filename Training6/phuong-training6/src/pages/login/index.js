import React, { useState } from "react";
import "./login.scss";
import { Card, Button } from "antd";
import { useForm } from "react-hook-form";
import { bindActionCreators } from "redux";
import {useDispatch} from "react-redux"
import {userLogin} from "../../redux/auth/auth.action"

const LoginPage = () => {
  const dispatch = useDispatch()
  const [reqLogin, setReqLogin] = useState({ email: "", password: "" });
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setReqLogin({ ...reqLogin, [name]: value });
  };
  
  const onSubmit = () => {
    let dispatchLogin = bindActionCreators(userLogin, dispatch)
    dispatchLogin(reqLogin)
  }

  return (
    <div className="container login">
      <div className="row form-login">
        <div className="col-6">
          <Card>
            <h3 className="text-center">Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>User name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={reqLogin.email}
                  onChange={handleChange}
                  ref={register({
                      required: "Username is required"
                  })}
                  name="email"
                />
                {errors.email && (
                    <span className="text-danger">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  defaultValue={reqLogin.password}
                  onChange={handleChange}
                  name="password"
                  ref={register({
                      required: "Password is require"
                  })}
                />
                {errors.password && (
                    <span className="text-danger">{errors.password.message}</span>
                )}
              </div>
              <div className="form-group d-flex justify-content-center">
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
