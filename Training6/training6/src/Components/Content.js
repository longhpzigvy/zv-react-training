import React from 'react';
import {connect} from 'react-redux';
import * as Actions from '../Actions/index';

const Content = props => {
    const logOut = () => {
        props.logOut();
    }
    return (
        <div>
            <h1>
                Logged
            </h1>
            <button onClick={logOut}>Log out</button>
        </div>
    );
}
const mapDispatchToProp = {
    logOut: Actions.logOut
}
export default connect(null, mapDispatchToProp)(Content);