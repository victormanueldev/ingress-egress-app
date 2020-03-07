import { Action } from '@ngrx/store';
import { Movement } from '@app/models/movement.model';


export enum ActionTypes {
    SET_ITEMS   = "[Movements Service] Set items",
    UNSET_ITEMS = "[Movements Service[ Unset items"
}

export class SetItems implements Action {
    readonly type = ActionTypes.SET_ITEMS;
    constructor( public items: Movement[] ){}
}

export class UnsetItems implements Action {
    readonly type = ActionTypes.UNSET_ITEMS;
}

export type Actions = SetItems | UnsetItems;