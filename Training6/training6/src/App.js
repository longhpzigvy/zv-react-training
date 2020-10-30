import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './Components/LoginForm';
import Content from './Components/Content';
import './App.css';
import {getLogin} from './Selectors/login.selector';

function App(props) {
  const content = props.login.logInStatus ? <Content /> : <LoginForm />
  return (
    <div className='container'>
      {content}
    </div>
  );
}
const mapStateToProp = state => {
  return {
    login: getLogin(state)
  }
}
export default connect(mapStateToProp, null)(App);