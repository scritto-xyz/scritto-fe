import { Setter } from "solid-js";

export interface PasswordValidationFeedback {
    hasMinLength: boolean;
    containsNumber: boolean;
    containsLetter: boolean;
}

export enum ValidationType {
    DEFAULT,
    EMAIL,
    CONFIRMATION,
    PASSWORD,
}

export interface Validation {
    error?: boolean;
    validationType?: ValidationType;
    fieldNameToConfirm?: string;
    helperText?: string;
    passwordValidationFeedback?: PasswordValidationFeedback;
}

export interface FormField {
    name: string;
    required: boolean;
    type?: string;
    setter: Setter<any>;
    label?: string;
    validation?: Validation;
}
