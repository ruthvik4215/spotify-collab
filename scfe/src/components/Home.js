import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom';
import HostRoom from "./HostRoom";
import JoinRoom from "./JoinRoom";
import Room from "./Room";

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
                    <Route path='/join' component={JoinRoom} />
                    <Route path='/host' component={HostRoom} />
                    <Route path='/room/:roomCode' component={Room} />
                </Switch>
            </Router>
        );
    }
}