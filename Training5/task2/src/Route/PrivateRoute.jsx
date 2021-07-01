import React from "react";
import { useSelector } from 'react-redux'
import {
    Route,
    Redirect,
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector(state => state.authorization)
    const token = user.token

    return (
        <Route
            {...rest}
            render={() =>
                token ?
                    (children) : (
                        <Redirect to='/login' />
                    )
            }
        />
    )
}

export default PrivateRoute