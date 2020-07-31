import { Pilot } from "./pilot.js";

// game object knows what time it is. game updates using React's setInterval system, passed in by index.js

// export var Game = {
//     _pilots: {},
//     init: function() {
//         this.createPilot("Shinji","Ikari",3);
//         this.createPilot("Rei","Ayanami",1);
//     },
//     // FUTURE: Move this to Agency (NERV, etc)
//     createPilot: function(firstName,lastName,idCode) {
//         // Check if idCode is already used
//         if(this._pilots[idCode] != null) {
//             console.log("Tried to create a pilot with pre-existing id code " + idCode.toString());
//             return;
//         } else {
//             this._pilots[idCode] = new Pilot(firstName,lastName,idCode);
//         }

//     }
// }

export class Game {
    constructor() {
        // Initialize
        this._pilots = {};
        this._time = new Date(968857200000); // Sept 13, 2000
        this._timeFactor = 5;
        // Setup testing variables
        this.createPilot("Shinji","Ikari",3);
        this.createPilot("Rei","Ayanami",1);
        this.createPilot("Asuka","Soryu",2);
    }
    advanceTime(ms) {
        // Advance game time by real time amount of milliseconds
        this._time.setTime(this._time.getTime()+(ms*this._timeFactor));
        //console.log(this._time.toLocaleString())
    }
    createPilot(firstName, lastName, idCode) {
        // Check if idCode is already used
        if(this._pilots[idCode] != null) {
            console.log("Tried to create a pilot with pre-existing id code " + idCode.toString());
            return;
        } else {
            this._pilots[idCode] = new Pilot(firstName,lastName,idCode);
        }

    }
    getPilots() {return this._pilots;}
    getTime() {return this._time;}
}

export default Game;