import { FormFieldEntries } from "./interface/FormFieldEntries";
import { ValidationFactory } from "./validation/field/ValidationFactory";
import { Validation } from "./interface/FormField";

export function validateForm(formValues: any, formFieldEntries: FormFieldEntries): {
    adjustedEntries: FormFieldEntries,
    isError: boolean
} {
    const adjustedEntries: FormFieldEntries = {};
    let isFormError: boolean = false;
    Object.values(formFieldEntries)
        .forEach((formField) => {
            const validator = ValidationFactory.createValidator(formValues, formField);
            const validation: Validation = validator.fieldIsValid();
            const { error: isFieldError, passwordValidationFeedback } = validation;
            if (isFieldError && !isFormError) {
                isFormError = true;
            }

            adjustedEntries[formField.name] = {
                ...formField,
                validation: {
                    ...formField.validation,
                    error: isFieldError,
                    passwordValidationFeedback,
                },
            };
        });
    return { adjustedEntries, isError: isFormError };
}