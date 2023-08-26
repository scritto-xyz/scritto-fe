import { FormField } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class EmailValidator extends AbstractValidator {
    constructor(formValues: any, formField: FormField) {
        super(formValues, formField);
    }

    fieldIsValid(): boolean {
        const { name } = this.formField;
        return this.valueIsPresent() && this.validateEmail(this.formValues[name]);
    }

    private validateEmail = (email: string): boolean => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };
}