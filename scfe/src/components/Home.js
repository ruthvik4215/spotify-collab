import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom';
import HostAGroup from "./HostAGroup";
import JoinAGroup from "./JoinAGroup";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                <Route exact path='/music' >
                        <h1>Home page</h1>
                    </Route>
                    <Route path='/join' component={JoinAGroup} />
                    <Route path='/host' component={HostAGroup} />
                </Switch>
            </Router>
        );
    }
}