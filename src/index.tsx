import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RouteApp  from './routeapp';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/swap" component={RouteApp} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
