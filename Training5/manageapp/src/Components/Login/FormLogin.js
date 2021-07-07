import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/action/UserAction";
export default function FormLogin() {
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        const values = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        dispatch(loginUser(values));
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-floating">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                />
                <label for="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
            </button>
        </form>
    );
}
