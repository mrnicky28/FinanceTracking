import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from '../interfaces/authState.interface';

export const authFeatureSelector =
    createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting,
);

export const isLoadingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isLoading
);

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.validationErrors,
);
