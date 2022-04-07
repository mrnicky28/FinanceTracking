import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MatchPasswordValidator {
    static matchPassword(passwordControl: string, confirmPasswordControl: string): ValidatorFn | any {
        return (formGroup: FormGroup): ValidationErrors | null => {
            const password = formGroup.get(passwordControl)?.value;
            const confirmPassword = formGroup.get(confirmPasswordControl)?.value;

            if (password == confirmPassword) {
                return null;
            }
            return { noMatch: true };
        };
    }
}
