
export class User {
    
    public name     : string;
    public email    : string;
    public uid      : string;

    constructor( user: DataUser ){
        this.name   = user && user.name     || null;
        this.email  = user && user.email    || null;
        this.uid    = user && user.uid      || null;
    }

}

interface DataUser {
    uid     : string;
    email   : string;
    name    : string;
}