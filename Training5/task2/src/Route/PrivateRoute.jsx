import React from "react";
import { useSelector } from 'react-redux'
import {
    Route,
    Redirect,
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector(state => state.auth)
    const token = user.token

    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ?
                    (children) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: location }
                        }} />
                    )
            }
        />
    )
}

export default PrivateRoute