import React from "react";

export default class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canGuestPause: false,
            votesToSkip: 0,
            isHost: false
        };
        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetails();
    }

    getRoomDetails() {
        fetch('scapi/broadcastroom'+'?code='+this.roomCode)
        .then((response) => response.json())
        .then((data) => this.setState({votesToSkip: data.votesToSkip,canGuestPause: data.canGuestPause,isHost: data.is_host }));
    }

    render() {
        return (
            <div>
                <h1>Room: {this.roomCode}</h1>
                <p>Votes: {this.state.votesToSkip}</p>
                <p>Host: {this.state.isHost.toString()}</p>
                <p>Controller: {this.state.canGuestPause.toString()}</p>
            </div>
        );
    }
}