import { SelectOption } from "../../components/common/SelectField";

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
    label?: string;
    value?: string;
    validation?: Validation;
    selectOptions?: SelectOption[];
}
