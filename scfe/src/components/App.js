import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Spotify Collab</h1>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);