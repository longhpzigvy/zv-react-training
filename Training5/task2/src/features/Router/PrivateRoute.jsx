import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ children, ...rest }) => {
    const user = useSelector(state => state.users)
    const isAuth = user.token
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute