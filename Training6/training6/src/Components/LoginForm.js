import React, { useState } from 'react';
import * as Actions from '../Actions/index';
import {connect} from 'react-redux';

const LoginForm = props => {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const onChangeId = e => {
        setUserId(e.target.value);
    }
    const onChangePassword = e => {
        setUserPassword(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        const userAccount = {
            id: userId,
            password: userPassword
        }
        props.getUserAccount(userAccount);
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>User name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter user name" 
                    value = {userId}
                    onChange={onChangeId}
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
                value={userPassword}
                onChange={onChangePassword}
                />
            </div>
            <button type="submit" className="btn btn-primary">Log in</button>
        </form>
    );
}

const mapDispatchToProp = {
    getUserAccount: Actions.getUserAccount
}

export default connect(null, mapDispatchToProp)(LoginForm);