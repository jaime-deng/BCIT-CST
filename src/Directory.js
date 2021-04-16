import React from 'react';
import App from "./App";
import Home from "./Home";
import Login from "./Login"
import Logout from "./Logout"
import Confirm from "./Confirm"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Directory() {
    return (
        <Router>
            <Switch>
                <Route  exact path="/" component={Home} />
                <Route path="/select" component={App} />
                <Route path="/confirmation" component={Confirm} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
            </Switch>
        </Router>
    )
}

export default Directory;
