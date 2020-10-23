import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//store
import {applyMiddleware, createStore} from 'redux';
import myReducer from './Reducers/index';
//provider
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//redux dev tool
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(myReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
