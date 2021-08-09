import React, { Component } from 'react'
import { render } from 'react-dom'
import Home from './Home';
import { BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
// import joinRoom from './joinRoom';
// import HostRoom from './HostRoom';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Home />
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);