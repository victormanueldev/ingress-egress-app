import { createSelector, Selector } from '@ngrx/store';
import { MovementsState, MovementsAppState } from '@app/reducers/movements.reducer';


export const getTotalMovementType = () => createSelector(
    ( state: MovementsAppState, props: any ) => state.movements,
    ( movements: MovementsState, props: any ) => {                
        let total = 0;
        movements.movements.forEach( movement => {
            if( movement.type == props.type) {
                total += movement.amount
            }
        });
        return total;
    }
);