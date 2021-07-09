import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FormLogin from "../../Components/Login/FormLogin";
import "./PageLogin.css";
import { withRouter } from "react-router-dom";
const PageLogin = (props) => {
    const user = useSelector((state) => {
        return state.userToken;
    });

    useEffect(() => {
        if (user !== null) {
            props.history.push("/");
        }
    }, [user, props.history]);

    return (
        <div className="text-center mt-4">
            <div className="form-signin">
                <FormLogin />
            </div>
        </div>
    );
};
export default withRouter(PageLogin);
