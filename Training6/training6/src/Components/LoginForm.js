import React, { useEffect, useState } from 'react';
import * as Actions from '../Actions/index';
import {connect} from 'react-redux';
import {getLogin} from '../Selectors/login.selector';

const LoginForm = props => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const onChangeUser = e => {
        setUser(e.target.value);
    }
    const onChangePassword = e => {
        setPassword(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        props.loginRequest(user, password);
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>User name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter user name" 
                    value = {user}
                    onChange={onChangeUser}
                />
                <small className="form-text text-muted">
                    We'll never share your account with anyone else.
                </small>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
                />
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
        </form>
    );
}
const mapStateTopProp = state => {
    return {
        login: getLogin(state)
    }
}
const mapDispatchToProp = {
    loginRequest: Actions.loginRequest
}

export default connect(mapStateTopProp, mapDispatchToProp)(LoginForm);