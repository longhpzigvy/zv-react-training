import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
const Header = (props) => {
    const user = useSelector((state) => {
        return state.userToken;
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    Zigvy
                </NavLink>
                {user !== null && (
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
                                {user.user.fullName}
                            </Link>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li
                                    onClick={() => {
                                        window.localStorage.clear();
                                        props.history.push("/login");
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
};
export default withRouter(Header);
