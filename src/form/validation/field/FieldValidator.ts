import { FormField } from "../../interface/FormField";
import { AbstractValidator } from "./AbstractValidator";


export class FieldValidator extends AbstractValidator {
    constructor(formValues: any, formField: FormField) {
        super(formValues, formField);
    }

    fieldIsValid(): boolean {
        return this.valueIsPresent();
    }
}