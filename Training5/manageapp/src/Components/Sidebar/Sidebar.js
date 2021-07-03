import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsersInfo, GetAccountInfo } from "../../redux/action/UserAction";

export default function Sidebar() {
    const dispatch = useDispatch();
    const [user, usersList] = useSelector((state) => {
        return [state.userToken, state.usersList];
    });
    useEffect(() => {
        dispatch(GetAllUsersInfo(user.token));
        dispatch(GetAccountInfo(user.token));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <NavLink
                        exact
                        to="/home"
                        className="nav-link link-dark"
                        aria-current="page"
                    >
                        Home
                    </NavLink>
                </li>
                {usersList.length === 0 ? (
                    <li
                        className="nav-item"
                        onClick={() => {
                            alert("Not admin");
                            window.location.replace("/home");
                        }}
                    >
                        <NavLink className="nav-link link-dark" to="/user">
                            Users
                        </NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink
                            to="/home/users"
                            className="nav-link link-dark"
                        >
                            Users
                        </NavLink>
                    </li>
                )}

                <li className="nav-item">
                    <NavLink
                        exact
                        to="/home/profile"
                        className="nav-link link-dark"
                    >
                        My Info
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
