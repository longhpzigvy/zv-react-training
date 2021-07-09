import React from "react";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
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
                <li>
                    <NavLink to="/home/users" className="nav-link link-dark">
                        Users
                    </NavLink>
                </li>
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
