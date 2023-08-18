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

export function validateForm(formValues: any, formFieldEntries: FormFieldEntries): {
    adjustedEntries: FormFieldEntries,
    isError: boolean
} {
    const adjustedEntries: FormFieldEntries = {};
    let isError: boolean = false;
    Object.values(formFieldEntries)
        .forEach((formField) => {
            const { name } = formField;
            if (!formValues || !Object.keys(formValues).includes(name) || !isValidFormValue(formValues[name], formField)) {
                if (!isError) {
                    isError = true;
                }

                adjustedEntries[name] = {
                    ...formField,
                    error: true,
                };
            } else {
                adjustedEntries[name] = {
                    ...formField,
                    error: false,
                };
            }
        });
    return { adjustedEntries, isError };
}

function isValidFormValue(value: any, formField: FormField): boolean {
    const { required } = formField;

    if (!required) {
        return true;
    }

    return numberOrStringIsPresent(value);
}