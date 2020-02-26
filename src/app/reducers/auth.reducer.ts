import { User } from '@app/auth/user.model';
import * as fromAuth from '@app/actions/auth.actions';


export interface AuthState {
    user: User
}

export const initialState: AuthState = {
    user: null
}

export function authReducer( 
    state = initialState, 
    action: fromAuth.Actions 
): AuthState {

    switch (action.type) {
        case fromAuth.ActionTypes.SET_USER:
            return {  user: { ...action.payload.user } };
    
        default:
            return state;
    }

}