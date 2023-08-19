import { Setter } from "solid-js";

function numberOrStringIsPresent(value: string | number | undefined | null): boolean {
    if (value === undefined || value === null) {
        return false;
    }

    return typeof value === "string" && value !== "";
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

function isValidFormValue(value: any, formField: FormField): boolean {
    const { required } = formField;
    return !required || numberOrStringIsPresent(value);
}

export function validateForm(formValues: any, formFieldEntries: FormFieldEntries): {
    adjustedEntries: FormFieldEntries,
    isError: boolean
} {
    const adjustedEntries: FormFieldEntries = {};
    let isFormError: boolean = false;
    Object.values(formFieldEntries)
        .forEach((formField) => {
            const { name } = formField;
            let isFieldError: boolean = false;
            if (!formValues || !Object.keys(formValues).includes(name) || !isValidFormValue(formValues[name], formField)) {
                isFieldError = true;
                isFormError = true;
            }

            adjustedEntries[name] = {
                ...formField,
                error: isFieldError,
            };
        });
    return { adjustedEntries, isError: isFormError };
}