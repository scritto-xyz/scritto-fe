import { FormField, Validation } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class EmailValidator extends AbstractValidator {
    constructor(formField: FormField) {
        super(formField);
    }

    fieldIsValid(): Validation {
        const { value } = this.formField;
        const isError = !this.valueIsPresent() || !this.validateEmail(value);
        return { error: isError };
    }

    private validateEmail = (email: string): boolean => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };
}