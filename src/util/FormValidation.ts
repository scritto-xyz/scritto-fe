import { Setter } from "solid-js";

function numberOrStringIsPresent(value: string | number | undefined | null): boolean {
    if (value === undefined || value === null) {
        return false;
    }

    return !(typeof value === "string" && value === "");
}

export interface FormField {
    name: string;
    required: boolean;
    type?: string;
    setter: Setter<any>;
    label?: string;
    error?: boolean;
}

export interface FormFieldEntries {
    [name: string]: FormField;
}

function validateFormValues(formValues: any, formFieldEntries: FormFieldEntries): FormFieldEntries {
    const errors: FormFieldEntries = {};

    Object.values(formFieldEntries)
        .forEach((formField) => {
            const { name } = formField;
            const value = formValues[name];

            if (isValidFormValue(value, formField)) {
                errors[name] = {
                    ...formField,
                    error: true,
                };
            }
        });
    return errors;
}

function isValidFormValue(value: any, formField: FormField): boolean {
    const { required } = formField;

    return required && !numberOrStringIsPresent(value);
}


export const validateForm = (values: any, formFields: FormFieldEntries, errorSetter: Setter<FormFieldEntries>) => {
    const errors = validateFormValues(values, formFields);
    errorSetter(errors);
    return Object.entries(errors).length > 0;
};