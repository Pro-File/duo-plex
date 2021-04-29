import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import ModalManager from './Components/ModalManager/ModalManager'
import App from './App';
import store from './../src/Redux/store'

ReactDOM.render(
  <Provider store = {store}>
    <ModalManager/>
    <App/>
  </Provider>,
  document.getElementById('root')
);

