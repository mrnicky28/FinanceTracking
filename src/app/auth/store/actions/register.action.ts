import { BackendErrorsInterface } from 'src/app/shared/interfaces/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/interfaces/currentUser.interface';

import { createAction, props } from '@ngrx/store';

import { RegisterRequestInterface } from '../../interfaces/registerRequest.interface';
import { ActionTypes } from '../actionType';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: RegisterRequestInterface }>(),
);

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>(),
);

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: BackendErrorsInterface }>(),
);
