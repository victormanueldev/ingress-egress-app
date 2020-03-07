import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment }    from '../../environments/environment';
import * as fromUI        from '@app/reducers/ui.reducer';
import * as fromAuth      from '@app/reducers/auth.reducer';
import * as fromMovements from '@app/reducers/movements.reducer';

export interface AppState {
  ui        : fromUI.Loading,
  auth      : fromAuth.AuthState,
  movements : fromMovements.MovementsState
}

export const reducers: ActionReducerMap<AppState> = {
  ui        : fromUI.uiReducer,
  auth      : fromAuth.authReducer,
  movements : fromMovements.movementsReducer
};

export const selectMovements = ( state: AppState ) => state.movements;


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
