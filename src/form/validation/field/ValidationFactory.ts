import { FormField, ValidationType } from "../../interface/FormField";
import { ConfirmationValidator } from "./ConfirmationValidator";
import { DefaultValidator } from "./DefaultValidator";
import { AbstractValidator } from "./AbstractValidator";
import { EmailValidator } from "./EmailValidator";
import { PasswordValidator } from "./PasswordValidator";


export class ValidationFactory {
    static createValidator(formValues: any, formField: FormField): AbstractValidator {
        const validationType = formField.validation?.validationType;
        switch (validationType) {
            case ValidationType.CONFIRMATION:
                return new ConfirmationValidator(formValues, formField);
            case ValidationType.EMAIL:
                return new EmailValidator(formValues, formField);
            case ValidationType.PASSWORD:
                return new PasswordValidator(formValues, formField);
            case ValidationType.DEFAULT:
            default:
                return new DefaultValidator(formValues, formField);
        }
    }
}