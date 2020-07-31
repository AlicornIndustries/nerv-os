import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './clock.js';
import Game from './assets/game.js';

// function PilotDisplay(props) {
//     return (
//         <li>
//             {props.name}
//         </li>
//     )
// }



class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new Game(),
            refreshRate: 50
        }
    }
    componentDidMount() {
        // Refresh at intervals
        this.intervalID = setInterval(
            () => this.tick(), this.state.refreshRate
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        // Update the game based on delta-time
        this.state.game.advanceTime(this.state.refreshRate);
        // Change state to itself to re-render
        this.setState({state: this.state});
    }
    // TODO: Need to re-render clock. Probably set it up with its own State, so React knows when to render it.
    render() {
        // NB: May need to add !.hasOwnPropertyKey(key) later
        // Format list of pilots. FUTURE: Is there a better way to do this with some map() witchcraft?
        let listItems = [];

        for(var idCode in this.state.game.getPilots()) {
            listItems.push(<li key={idCode}>{this.state.game.getPilots()[idCode].fullNameReverse}</li>)
        }
        return (
            <div>
                <Clock time={this.state.game.getTime()}/>
                <div className="pilots-list">{listItems}</div>
            </div>
            )

    }
}

// ========================================

ReactDOM.render(
    <Display />,
    document.getElementById("root")
);