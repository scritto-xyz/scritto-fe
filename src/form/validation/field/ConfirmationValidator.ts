import { FormField, Validation } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class ConfirmationValidator extends AbstractValidator {
    constructor(formValues: any, formField: FormField) {
        super(formValues, formField);
    }

    fieldIsValid(): Validation {
        const { name, validation } = this.formField;
        const { fieldNameToConfirm } = validation;
        const isError = this.valueIsPresent() && this.formValues[name] === this.formValues[fieldNameToConfirm];
        return { error: isError };
    }
}