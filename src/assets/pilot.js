export class Pilot {
    constructor(firstName, lastName, idCode) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._idCode = idCode;
        this._physicalHealthMax = 100;
        this._physicalHealthCurrent = this._physicalHealthMax;
        this._mentalHealthMax = 100;
        this._mentalHealthCurrent = this._mentalHealthMax;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}

export function testFunc() {
    return "success!";
}