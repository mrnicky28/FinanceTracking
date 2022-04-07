import { CurrentUserInterface } from 'src/app/shared/interfaces/currentUser.interface';

export interface AuthStateInterface {
    isSubmitting: boolean;
    isLoading: boolean;
    currentUser: CurrentUserInterface | null;
    isLoggedIn: boolean | null;
    validationErrors: string[] | null;
}
