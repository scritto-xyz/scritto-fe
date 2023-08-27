import { FormField, Validation } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class PasswordValidator extends AbstractValidator {
    constructor(formValues: any, formField: FormField) {
        super(formValues, formField);
    }

    fieldIsValid(): Validation {
        if (!this.valueIsPresent()) {
            return { error: true };
        }

        const { name } = this.formField;
        return this.validatePassword(this.formValues[name]);
    }

    /**
     * Password must be at least 8 characters long and contain at least one letter and one number.
     * @param password
     */
    private validatePassword = (password: string): Validation => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passwordRegex.test(password)) {
            return { error: false };
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