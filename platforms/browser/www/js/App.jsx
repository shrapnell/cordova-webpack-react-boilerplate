// import react
import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, HashRouter, Switch  } from 'react-router-dom';

// import vendors
require('font-awesome-webpack');
require('bootstrap');
import Raleway from './../scss/Raleway.scss';
import Style   from './../scss/app.global.scss';
$ = require('jQuery');

import Home from './Pages/Home.jsx';

// finde einsprungpunkt auf  der HTML seite
const App = document.getElementById('App');

// wenn device-ready
document.addEventListener('deviceready', () => {
  // Starte React
  ReactDOM.render(
    <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </HashRouter>
    , App);
    
}, false);