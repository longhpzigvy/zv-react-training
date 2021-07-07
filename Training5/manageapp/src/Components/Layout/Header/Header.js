import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
    const [user, userInfo] = useSelector((state) => {
        return [state.userToken, state.userProfile];
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    Zigvy
                </NavLink>
                {user !== "" && (
                    <ul className="navbar-nav ">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link "
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {userInfo.fullName}
                            </Link>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li
                                    onClick={() => {
                                        window.localStorage.clear();
                                        window.location.replace("/login");
                                    }}
                                >
                                    <Link className="dropdown-item" to="#">
                                        Log Out
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
