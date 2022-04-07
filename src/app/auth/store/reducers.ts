import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../interfaces/authState.interface';
import {
    registerAction, registerFailureAction, registerSuccessAction
} from './actions/register.action';

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null,
};

const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            isLoading: true,
            validationErrors: null,
        }),
    ),
    on(
        registerSuccessAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoading: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
            validationErrors: null,
        }),
    ),
    on(
        registerFailureAction,
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoading: false,
            validationErrors: action.error,
        }),
    ),
);

export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}
