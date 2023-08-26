import { Setter } from "solid-js";

export interface FormField {
    name: string;
    required: boolean;
    type?: string;
    setter: Setter<any>;
    label?: string;
    error?: boolean;
    formFieldType?: FormFieldType;
    fieldNameToConfirm?: string;
}

export enum FormFieldType {
    DEFAULT,
    EMAIL,
    CONFIRMATION,
}