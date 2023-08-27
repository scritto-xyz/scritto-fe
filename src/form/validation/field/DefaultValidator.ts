import { FormField, Validation } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class DefaultValidator extends AbstractValidator {
    constructor(formValues: any, formField: FormField) {
        super(formValues, formField);
    }

    fieldIsValid(): Validation {
        return { error: this.valueIsPresent() };
    }
}