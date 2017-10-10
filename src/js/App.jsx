// import react
import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, HashRouter, Switch  } from 'react-router-dom';

// import starting html
require('./../index.html');

// import vendors
require('font-awesome-webpack');

import Raleway from './../scss/Raleway.scss';
import Style   from './../scss/app.global.scss';
global.jQuery = require('jquery');
require('bootstrap');

import Home from './Pages/Home.jsx';

// finde einsprungpunkt auf  der HTML seite
const App = document.getElementById('App');

window.onerror = function (msg, url, lineNo, columnNo, error) {
  /*
  msg – The message associated with the error, e.g. “Uncaught ReferenceError: foo is not defined”
  url – The URL of the script or document associated with the error, e.g. “/dist/app.js”
  lineNo – The line number (if available)
  columnNo – The column number (if available)
  error – The Error object associated with this error (if available)

  
  var text = document.getElementById('log');
  var old = text.innerHTML;
  text.innerHTML = "["+url+"] "+error+" "+msg + " Line:"+lineNo+"<br>" + old;
  //return false; */
  alert(msg);
}

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