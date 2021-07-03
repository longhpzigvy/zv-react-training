import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import Detail from "../Detail/Detail";
export default function Users() {
    const usersList = useSelector((state) => {
        return state.usersList;
    });
    let { path, url } = useRouteMatch();
    const renderList = () => {
        return usersList?.map((item) => {
            return (
                <button type="button" class="btn btn-dark mt-4">
                    <Link exact to={`${url}/${item.id}`}>
                        {item.fullName}
                    </Link>
                </button>
            );
        });
    };

    return (
        <div className="row" style={{ height: 0 }}>
            <div className="col-lg-6">
                <div class="btn-group-vertical">
                    <div className="row">{renderList()}</div>
                </div>
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
