import React from 'react';
import * as Actions from './Actions/index';
import {connect} from 'react-redux';
import LoginForm from './Components/LoginForm';
import Content from './Components/Content';
import './App.css';

function App(props) {
  const content = props.logIn ? <Content /> : <LoginForm />
  return (
    <div className='container'>
      {content}
    </div>
  );
}
const mapStateToProp = state => {
  return {
    logIn: state.logIn.logInStatus
  }
}
const mapDispatchToProp = {
  fetchListTask: Actions.fetchListTask
}
export default connect(mapStateToProp, mapDispatchToProp)(App);