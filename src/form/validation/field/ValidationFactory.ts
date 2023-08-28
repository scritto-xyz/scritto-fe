import { FormField, ValidationType } from "../../interface/FormField";
import { ConfirmationValidator } from "./ConfirmationValidator";
import { DefaultValidator } from "./DefaultValidator";
import { AbstractValidator } from "./AbstractValidator";
import { EmailValidator } from "./EmailValidator";
import { PasswordValidator } from "./PasswordValidator";
import { FormFieldEntries } from "../../interface/FormFieldEntries";


export class ValidationFactory {
    static createValidator(formField: FormField, formFieldEntries: FormFieldEntries): AbstractValidator {
        const validationType = formField.validation?.validationType;
        switch (validationType) {
            case ValidationType.CONFIRMATION:
                return new ConfirmationValidator(formField, formFieldEntries);
            case ValidationType.EMAIL:
                return new EmailValidator(formField);
            case ValidationType.PASSWORD:
                return new PasswordValidator(formField);
            case ValidationType.DEFAULT:
            default:
                return new DefaultValidator(formField);
        }
    }
}