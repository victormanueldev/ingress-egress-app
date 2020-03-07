import * as fromMovements from '@app/actions/movements.actions';
import { Movement } from '@app/models/movement.model';

export interface MovementsState {
    movements: Movement[];
}

export const initialState: MovementsState = { movements: [] };

export function movementsReducer( 
    state = initialState, 
    action: fromMovements.Actions 
): MovementsState {

    switch (action.type) {

        case fromMovements.ActionTypes.SET_ITEMS:
            return { 
                movements: action.items.map( movement => {
                    return {
                        ...movement
                    }
                })
            }

        case fromMovements.ActionTypes.UNSET_ITEMS:
            return {
                movements: []
            }
    
        default:
            return state;
    }

}