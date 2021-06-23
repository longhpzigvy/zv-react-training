import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
    const dispatch = useDispatch();

    const user = useSelector((state) => {
        return state.userToken;
    });

    useEffect(() => {
        dispatch({ type: "GET_USERS", values: user.token });
        dispatch({ type: "GET_INFO", values: user.token });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const usersList = useSelector((state) => {
        return state.usersList;
    });

    return (
        <nav id="sidebar" className="bg-dark border-primary">
            <ul className="list-unstyled components">
                <li className="active">
                    <NavLink
                        exact
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#FFB6C1",
                            background: " #ABCCE8",
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                {usersList === undefined ? (
                    <li
                        onClick={() => {
                            alert("Not admin");
                        }}
                    >
                        <NavLink
                            href="#pageSubmenu"
                            data-toggle="collapse"
                            aria-expanded="false"
                            to="/users"
                        >
                            User List
                        </NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink
                            to="/home/users"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "#FFB6C1",
                                background: " #ABCCE8",
                            }}
                        >
                            User List
                        </NavLink>
                    </li>
                )}
                <li>
                    <NavLink
                        exact
                        to="/home/profile"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#FFB6C1",
                            background: " #ABCCE8",
                        }}
                    >
                        My Info
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
