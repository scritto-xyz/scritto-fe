import { FormField, Validation } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";
import { FormFieldEntries } from "../../interface/FormFieldEntries";


export class ConfirmationValidator extends AbstractValidator {
    private formFieldEntries: FormFieldEntries;

    constructor(formField: FormField, formFieldEntries: FormFieldEntries) {
        super(formField);
        this.formFieldEntries = formFieldEntries;
    }

    fieldIsValid(): Validation {
        const { value, validation } = this.formField;
        const { fieldNameToConfirm } = validation;
        const isError = !(this.valueIsPresent() && value === this.formFieldEntries[fieldNameToConfirm].value);
        return { error: isError };
    }
}