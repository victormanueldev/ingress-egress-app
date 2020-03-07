export class Movement {
    public description  : string;
    public amount       : number;
    public type         : string;
    public uid?         : string;

    constructor( movement: DataMovement ) {
        this.description    = movement && movement.description  || null;
        this.amount         = movement && movement.amount       || null;
        this.type           = movement && movement.type         || null;
        //this.uid            = movement && movement.uid          || null;
    }
}

interface DataMovement {
    description : string;
    amount      : number;
    type        : string;
    uid?        : string;
}