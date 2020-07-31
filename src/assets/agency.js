import { Pilot } from "./pilot.js";

export class Agency {
    constructor(name) {
        this._name = name;
        this._pilots = {};
        this._funds = 100;
        this._fundsPerMonth = 10;
        // Setup testing values
        this.createPilot("Shinji","Ikari",3);
        this.createPilot("Rei","Ayanami",1);
        this.createPilot("Asuka","Soryu",2);
    }
    monthlyUpdate() {
        this.addFunds(this._fundsPerMonth);
        console.log(this._funds);
    }
    addFunds(amount) {
        this._funds += amount;
    }
    getFunds() {return this._funds;}
    createPilot(firstName, lastName, idCode) {
        // Check if idCode is already used
        if(this._pilots[idCode] != null) {
            console.log("Tried to create a pilot with pre-existing id code " + idCode.toString());
            return;
        } else {
            this._pilots[idCode] = new Pilot(firstName,lastName,idCode);
        }
    }
    getName() {return this._name;}
    getPilots() {return this._pilots;}
}