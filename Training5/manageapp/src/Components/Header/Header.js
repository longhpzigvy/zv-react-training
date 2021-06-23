import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const [user, userInfo] = useSelector((state) => {
        return [state.userToken, state.myProfile];
    });

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            style={{ marginBottom: "0!important" }}
        >
            <div
                className="container-fluid wrap-header"
                style={{ marginLeft: "0px!important" }}
            >
                <NavLink exact className="navbar-brand" to="/home">
                    Zigvy (Hello {userInfo.fullName})
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {user !== "" ? (
                            <li
                                className="nav-item"
                                onClick={() => {
                                    window.localStorage.clear();
                                    window.location.replace("/login");
                                }}
                            >
                                <Link className="nav-link">Log Out</Link>
                            </li>
                        ) : (
                            <Fragment />
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
