import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUI    from '@app/reducers/ui.reducer';
import * as fromAuth  from '@app/reducers/auth.reducer';

export interface AppState {
  ui: fromUI.Loading,
  auth: fromAuth.AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
  auth: fromAuth.authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
