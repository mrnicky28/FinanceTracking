import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MatchPasswordValidator {
    static matchPassword(
        psswordControl: string,
        confirmPasswordControl: string,
    ): ValidatorFn | any {
        return (formGroup: FormGroup): ValidationErrors | null => {
            const password = formGroup.get(psswordControl)?.value;
            const confirmPassword = formGroup.get(
                confirmPasswordControl,
            )?.value;

            console.log(password, confirmPassword, password == confirmPassword);
            if (password == confirmPassword) {
                return null;
            }
            return { noMatch: true };
        };
    }
}
