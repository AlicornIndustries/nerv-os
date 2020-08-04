import { Pilot } from "./pilot.js";
import { Mecha } from "./mecha.js";

export class Agency {
    constructor(name) {
        this._name = name;
        this._pilots = {};
        this._mechas = {};
        this._funds = 100;
        this._fundsPerMonth = 10;
        // Setup testing values
        this.createPilot("Shinji","Ikari",3);
        this.createPilot("Rei","Ayanami",1);
        this.createPilot("Asuka","Soryu",2);
        this.createMecha("Unit 00",'light','ABC');
        this.createMecha("Unit 01",'heavy','DEF');
    }
    get name() {return this._name;}
    get pilots() {return this._pilots;}
    get mechas() {return this._mechas}
    get funds() {return this._funds;}
    monthlyUpdate() {
        this.addFunds(this._fundsPerMonth);
        console.log(this._funds);
    }
    addFunds(amount) {
        this._funds += amount;
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
    createMecha(name, mechaType, idCode) {
            // Check if idCode is already used
            if(this._mechas[idCode] != null) {
                console.log("Tried to create a mecha with pre-existing id code " + idCode.toString());
                return;
            } else {
                this._mechas[idCode] = new Mecha(name,mechaType,idCode);
            }
    }

}