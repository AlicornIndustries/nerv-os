import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Pilot } from './assets/pilot.js';

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
            pilots: []
        }
        this.createPilot("Shinji","Ikari","3");
        this.createPilot("Rei","Ayanami","1");
        console.table(this.state.pilots);
    }
    createPilot(firstName,lastName,idCode) {
        // TODO: check to prevent id collisions
        this.state.pilots.push(new Pilot(firstName,lastName,idCode));
    }
    // renderPilotDisplay(i) {
    //     return (
    //         <PilotDisplay
    //             name="test"
    //         />);
    // }
    render() {
        const listItems = this.state.pilots.map((pilot) =>
            <li key={pilot._idCode}>{pilot.fullName}</li>
            );
        return <ul>{listItems}</ul>

        // return (
        //     <div>
        //         {this.renderPilotDisplay(0)}
        //         {this.renderPilotDisplay(1)}
        //     </div>
        // );
        // const data = [{"name":"test1"},{"name":"test2"}];
        // const listItems = data.map((d) => <li key={d.name}>{d.name}</li>)
        // return (
        //     <div className="pilotsList">
        //         {listItems}
        //     </div>
        // )
    }
}

// class Display extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pilots: []
//         }
//     }
//     render() {
//         let testPilot = new Pilot("Shinji","Ikari");
//         console.log(testPilot.fullName);



//         return(
//             <div className="game">TEST</div>
//         )
//     }
// }

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById("root")
);