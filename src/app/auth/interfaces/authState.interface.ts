import { BackendErrorsInterface } from 'src/app/shared/interfaces/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/interfaces/currentUser.interface';

export interface AuthStateInterface {
    isSubmitting: boolean;
    currentUser: CurrentUserInterface | null;
    isLoggedIn: boolean | null;
    validationErrors: BackendErrorsInterface | null;
}
