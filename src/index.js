import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Apply from './apply';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/ApplyPage">
        <Apply/>
      </Route>
  </Router> ,
  document.getElementById('root')
);
/*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //https://reactrouter.com/web/api/Route
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
