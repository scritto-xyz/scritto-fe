import { FormFieldEntries } from "./interface/FormFieldEntries";
import { ValidationFactory } from "./validation/field/ValidationFactory";

export function validateForm(formValues: any, formFieldEntries: FormFieldEntries): {
    adjustedEntries: FormFieldEntries,
    isError: boolean
} {
    const adjustedEntries: FormFieldEntries = {};
    let isFormError: boolean = false;
    Object.values(formFieldEntries)
        .forEach((formField) => {
            const validator = ValidationFactory.createValidator(formValues, formField);
            const isFieldError = !validator.fieldIsValid();
            if (isFieldError && !isFormError) {
                isFormError = true;
            }

            adjustedEntries[formField.name] = {
                ...formField,
                error: isFieldError,
            };
        });
    return { adjustedEntries, isError: isFormError };
}