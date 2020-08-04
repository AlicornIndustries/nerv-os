export class Mecha {
    constructor(name, mechaType, idCode) {
        this._name = name;
        this._mechaType = mechaType;
        this._idCode = idCode;
        this._pilot = null;
    }
    get name() {return this._name;}
    get mechaType() {return this._mechaType;}
    get idCode() {return this._idCode;}
    get pilot() {return this._pilot;}
}