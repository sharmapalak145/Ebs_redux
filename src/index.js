import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import reduxStore from './store'


ReactDOM.render(
  <Provider store={reduxStore}>
  <BrowserRouter>
    <App />
    </BrowserRouter></Provider>,
  document.getElementById('root')
);


