import { CurrentUserInterface } from 'src/app/shared/interfaces/currentUser.interface';

import { createAction, props } from '@ngrx/store';

import { LoginRequestinterface } from '../../interfaces/loginRequest.interface';
import { ActionTypes } from '../actionType';

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: LoginRequestinterface }>(),
);

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: CurrentUserInterface }>(),
);

export const loginFailureAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ error: string[] }>(),
);
