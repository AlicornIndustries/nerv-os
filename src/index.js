import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Pilot } from './assets/pilot.js';
import './clock.js';
import Clock from './clock.js';

// function PilotDisplay(props) {
//     return (
//         <li>
//             {props.name}
//         </li>
//     )
// }

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pilots: {}
        }
    }
    componentDidMount() {
        this.createPilot("Shinji","Ikari",3);
        this.createPilot("Rei","Ayanami",1);
        console.table(this.state.pilots);
    }
    createPilot(firstName,lastName,idCode) {
        // Check to prevent id collisions
        if(this.state.pilots[idCode] != null) {
            console.log("Tried to create a pilot with pre-existing id code " + idCode.toString());
            return;
        }
        // TODO: Still probably not a very good way to do it.
        // https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array/35174579
        // Without mutation:        
        var stateCopy = Object.assign({}, this.state);
        stateCopy.pilots[idCode] = new Pilot(firstName,lastName,idCode);
        this.setState(stateCopy);
    }
    // renderPilotDisplay(i) {
    //     return (
    //         <PilotDisplay
    //             name="test"
    //         />);
    // }
    render() {
        // NB: May need to add !.hasOwnPropertyKey(key) later
        // Format list of pilots. FUTURE: Is there a better way to do this with some map() witchcraft?
        let listItems = [];
        for(var idCode in this.state.pilots) {
            listItems.push(<li key={idCode}>{this.state.pilots[idCode].fullNameReverse}</li> );
        }
        return (
            <div>
                <Clock />
                <div className="pilots-list">{listItems}</div>
            </div>
            )

    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById("root")
);