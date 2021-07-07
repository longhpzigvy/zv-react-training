import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import Detail from "../Detail/Detail";
import { getAllUsersInfo } from "../../redux/action/UserAction";

export default function Users() {
    const dispatch = useDispatch();

    const [user] = useSelector((state) => {
        return [state.userToken];
    });

    useEffect(() => {
        dispatch(getAllUsersInfo(user.token));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const usersList = useSelector((state) => {
        return state.usersList;
    });

    let { path, url } = useRouteMatch();

    const renderList = () => {
        return usersList?.map((item) => {
            return (
                <button
                    type="button"
                    className="btn btn-dark mt-4"
                    key={Math.random() * 10}
                >
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
                <div className="btn-group-vertical">
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
