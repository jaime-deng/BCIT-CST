import React from 'react';
import { finDRenderedComponentWithType } from 'react-dom/test-utils';
import App from "./App";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Directory() {
    return (
        <Router>
          <div className="sites">
              <Route path="/" component={Home} />
              <Route path="/select" component={App}/>

              </div>  
        </Router>
    )
}

export default Directory;
