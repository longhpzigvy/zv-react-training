import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import Detail from "../Detail/Detail";
import "./Users.css";
export default function Users() {
    const usersList = useSelector((state) => {
        return state.usersList;
    });
    let { path, url } = useRouteMatch();
    const renderList = () => {
        return usersList?.map((item) => {
            return (
                <div className="col-md-12 col-lg-12">
                    <div className="member-card">
                        <div className="member-card-details">
                            <Link to="#">
                                <div className="member-name">
                                    {item.fullName}
                                </div>
                            </Link>
                            <div className="member-position">
                                Email: {item.email}
                            </div>
                        </div>
                        <div className="btn-fired">
                            <Link exact to={`${url}/${item.id}`}>
                                Detail
                            </Link>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="row" style={{ height: 0 }}>
            <div className="col-lg-6">
                <div className="row">{renderList()}</div>
            </div>
            <div className="col-lg-6">
                {
                    <Switch>
                        <Route exact path={`${path}`}>
                            <p>
                                Please choose your user to view your user detail
                            </p>
                        </Route>
                        <Route path={`${path}/:id`}>
                            <Detail />
                        </Route>
                    </Switch>
                }
            </div>
        </div>
    );
}
