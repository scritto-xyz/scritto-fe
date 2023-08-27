import { FormField, Validation } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class EmailValidator extends AbstractValidator {
    constructor(formValues: any, formField: FormField) {
        super(formValues, formField);
    }

    fieldIsValid(): Validation {
        const { name } = this.formField;
        const isError = this.valueIsPresent() && this.validateEmail(this.formValues[name]);
        return { error: isError };
    }

    private validateEmail = (email: string): boolean => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };
}