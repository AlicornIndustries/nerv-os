import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './clock.js';
import FinancesDisplay from './financesDisplay.js';
import Game from './assets/game.js';
import {GarageDisplay} from './garageDisplay';

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
            pilots: null,
            mechas: null,
            refreshRate: 50
        }
    }
    componentDidMount() {
        // Setup our state based on the created Game
        this.setState({
            pilots: this.state.game.pilots,
            mechas: this.state.game.mechas
        })
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
    renderGarageDisplay(idCode) {
        return(
            <GarageDisplay mecha={this.state.game.agency.mechas[idCode]}/>
        )
    }





    render() {
        // NB: May need to add !.hasOwnPropertyKey(key) later
        // Format list of pilots. FUTURE: Is there a better way to do this with some map() witchcraft?
        let pilotsListItems = [];
        // TODO: Replace with cleaner table?
        for(var idCode in this.state.game.agency.pilots) {
            let pilot = this.state.game.agency.pilots[idCode];
            pilotsListItems.push(<li key={idCode}>{pilot.fullNameReverse}
                {/* <span style={{float:'right'}}>
                    {pilot.healthString}
                </span>             */}
            </li>)
        }
        return (
            <div>
                <div id="topPanel" className='grid-container glowing-text'>
                    <grid-item>
                        <p>Lorem Ipsum</p>
                    </grid-item>
                    <grid-item>
                        <Clock time={this.state.game.time}/>
                    </grid-item>
                    <grid-item>
                        <FinancesDisplay funds={this.state.game.agency.funds}/>
                    </grid-item>
                </div>
                <div className='grid-container glowing-text'>
                    <grid-item>
                        <div id="pilots-list" className='glowing-text'>{pilotsListItems}</div>      
                    </grid-item>
                    <grid-item>
                        <GarageDisplay mechas={this.state.game.agency.mechas}/>
                        
                        
                        
                        
                        {/* {this.renderGarageDisplay('ABC')}
                        {this.renderGarageDisplay('DEF')} */}
                    </grid-item>
                </div>


                
            </div>
            )

    }
}

// ========================================

ReactDOM.render(
    <Display />,
    document.getElementById("root")
);