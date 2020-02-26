import * as fromUI from '@app/actions/ui.actions';

export interface Loading {
    isLoading: boolean;
}

export const initialState: Loading = {
        isLoading: false
}

export function uiReducer( state: Loading = initialState, action: fromUI.Actions ): Loading {
    switch (action.type) {
        case fromUI.ACTIVATE_LOADING:
            return {
                isLoading: true
            }            
        case fromUI.DEACTIVATE_LOADING:
            return {
                isLoading: false
            }            
    
        default:
            return state;
    }
}