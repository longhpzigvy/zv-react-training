import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FormLogin from "../../Components/Login/FormLogin";
import "./PageLogin.css";
export default function PageLogin() {
    const user = useSelector((state) => {
        return state.userToken;
    });

    useEffect(() => {
        if (user !== null) {
            window.location.replace("/");
        }
    }, [user]);

    return (
        <div className="text-center mt-4">
            <div className="form-signin">
                <FormLogin />
            </div>
        </div>
    );
}
