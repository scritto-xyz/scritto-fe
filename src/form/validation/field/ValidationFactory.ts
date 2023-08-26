import { FormField, FormFieldType } from "../../interface/FormField";
import { ConfirmationValidator } from "./ConfirmationValidator";
import { FieldValidator } from "./FieldValidator";
import { AbstractValidator } from "./AbstractValidator";
import { EmailValidator } from "./EmailValidator";


export class ValidationFactory {
    static createValidator(formValues: any, formField: FormField): AbstractValidator {
        const { formFieldType } = formField;
        switch (formFieldType) {
            case FormFieldType.CONFIRMATION:
                return new ConfirmationValidator(formValues, formField);
            case FormFieldType.EMAIL:
                return new EmailValidator(formValues, formField);
            default:
                return new FieldValidator(formValues, formField);
        }
    }
}