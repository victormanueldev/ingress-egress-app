
import { User } from '@app/models/user.model';
import { Action } from '@ngrx/store';


export enum ActionTypes {
    SET_USER = '[Auth Service] Set a User'
}

export class SetUserAuth implements Action {
    readonly type = ActionTypes.SET_USER;
    constructor( public payload: { user: User }) {}
}


export type Actions = SetUserAuth;