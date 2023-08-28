import { FormField, Validation } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class DefaultValidator extends AbstractValidator {
    constructor(formField: FormField) {
        super(formField);
    }

    fieldIsValid(): Validation {
        return { error: !this.valueIsPresent() };
    }
}