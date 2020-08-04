import { Agency } from "./agency.js";

// game object updates using React's setInterval system, passed in by index.js

export class Game {
    constructor() {
        // Initialize
        this._agency = new Agency('NERV');
        this._time = new Date(968857200000); // Sept 13, 2000
        this._timeFactor = 10;
    }
    advanceTime(ms) {
        // Advance game time by real time amount of milliseconds
        // Save the previous month to see if a month has passed
        const previousMonth = this._time.getMonth();
        this._time.setTime(this._time.getTime()+(ms*this._timeFactor));
        if(this._time.getMonth() !== previousMonth) {
            console.log("Month elapsed.");
            this._agency.monthlyUpdate();
        }

    }
    get agency() {return this._agency;}
    get time() {return this._time;}
}

export default Game;