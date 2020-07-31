import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './clock.js';
import FinancesDisplay from './financesDisplay.js';
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

        // TODO: Replace with cleaner table?
        for(var idCode in this.state.game.getAgency().getPilots()) {
            let pilot = this.state.game.getAgency().getPilots()[idCode];
            listItems.push(<li key={idCode}>{pilot.fullNameReverse}
                <span style={{float:'right'}}>
                    {pilot.healthString}
                </span>            
            </li>)
        }
        return (
            <div>
                <div id="topPanel" className='gridWrapper glowing-text'>
                    <grid-item>Lorem ipsum</grid-item>
                    <grid-item>
                        <Clock time={this.state.game.getTime()}/>
                    </grid-item>
                    <grid-item>
                        <FinancesDisplay />
                    </grid-item>
                </div>

                <div className="pilots-list glowing-text">{listItems}</div>
            </div>
            )

    }
}

// ========================================

ReactDOM.render(
    <Display />,
    document.getElementById("root")
);