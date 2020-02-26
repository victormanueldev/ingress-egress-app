import { Action } from '@ngrx/store';


export const ACTIVATE_LOADING   = '[Show Loading] Loading...';
export const DEACTIVATE_LOADING = '[Hide Loading] Load finished...';

export class ActivateLoadingAction implements Action {
    readonly type = ACTIVATE_LOADING;
}

export class DeactivateLoadingAction implements Action {
    readonly type = DEACTIVATE_LOADING;
}

export type Actions = ActivateLoadingAction | DeactivateLoadingAction;