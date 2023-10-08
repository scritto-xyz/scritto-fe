import { FormField, Validation } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class PasswordValidator extends AbstractValidator {
    constructor(formField: FormField) {
        super(formField);
    }

    fieldIsValid(): Validation {
        if (!this.valueIsPresent()) {
            return { error: true };
        }

        const { value } = this.formField;
        return this.validatePassword(value);
    }

    /**
     * Password must be at least 8 characters long and contain at least one letter and one number.
     * @param password
     */
    private validatePassword = (password: string): Validation => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passwordRegex.test(password)) {
            return { error: false,
                passwordValidationFeedback: {
                    hasMinLength: true,
                    containsNumber: true,
                    containsLetter: true,
                }, };
        }

        const hasMinLength = password.length >= 8;
        const containsLetter = /[a-zA-Z]/.test(password);
        const containsNumber = /\d/.test(password);
        return {
            error: true,
            passwordValidationFeedback: {
                hasMinLength,
                containsNumber,
                containsLetter,
            },
        };
    };
}