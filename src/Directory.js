import React from 'react';
import { finDRenderedComponentWithType } from 'react-dom/test-utils';
import App from "./App";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Directory() {
    return (
        <Router>
            <Switch>
                <Route  exact path="/" component={Home} />
                <Route path="/select" component={App} />
            </Switch>
        </Router>
    )
}

export default Directory;
