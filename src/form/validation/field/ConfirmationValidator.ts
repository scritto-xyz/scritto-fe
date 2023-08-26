import { FormField } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class ConfirmationValidator extends AbstractValidator {
    constructor(formValues: any, formField: FormField) {
        super(formValues, formField);
    }

    fieldIsValid(): boolean {
        const { name, fieldNameToConfirm } = this.formField;
        return this.valueIsPresent() && this.formValues[name] === this.formValues[fieldNameToConfirm];
    }
}