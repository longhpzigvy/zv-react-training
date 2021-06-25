import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { routes } from './route';
import Dashboard from '../Components/Dashboard/Dashboard'
import LoginPage from '../Components/login/LoginPage';
import PrivateRoute from './PrivateRoute';


const RouterPage = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return (<Route key={index} exact path={route.path} component={route.main} />)
                })}

            
                <PrivateRoute path='/'>
                    <Dashboard />
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

export default RouterPage