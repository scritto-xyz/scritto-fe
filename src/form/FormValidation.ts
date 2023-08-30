import { FormFieldEntries } from "./interface/FormFieldEntries";
import { ValidationFactory } from "./validation/field/ValidationFactory";
import { Validation } from "./interface/FormField";

export function validateForm(formFieldEntries: FormFieldEntries): {
    validatedEntries: FormFieldEntries,
    isError: boolean
} {
    const adjustedEntries: FormFieldEntries = {};
    let isFormError: boolean = false;
    Object.values(formFieldEntries)
        .forEach((formField) => {
            const validator = ValidationFactory.createValidator(formField, formFieldEntries);
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
    return { validatedEntries: adjustedEntries, isError: isFormError };
}