import { FormField, ValidationType } from "../interface/FormField";
import { FormFieldEntries } from "../interface/FormFieldEntries";

export const SIGNUP_FORM: FormFieldEntries = {
    'first_name': {
        name: 'first_name',
        label: 'First Name',
        required: true,
    } as FormField,
    'username': {
        name: 'username',
        label: 'Username',
        required: false,
    } as FormField,
    'email': {
        name: 'email',
        label: 'Email',
        required: true,
        validation: {
            validationType: ValidationType.EMAIL,
        },
    } as FormField,
    'user_type': {
        name: 'user_type',
        label: 'User Type',
        required: true,
    } as FormField,
    'password': {
        name: 'password',
        label: 'Password',
        required: true,
        type: 'password',
        validation: {
            validationType: ValidationType.PASSWORD,
            helperText: 'Password must be at least 8 characters long and contain at least one number and one special character',
            passwordValidationFeedback: {
                hasMinLength: null,
                containsNumber: null,
                containsLetter: null,
            }
        },
    } as FormField,
    'passwordConfirmation': {
        name: 'passwordConfirmation',
        label: 'Confirm Password',
        required: true,
        type: 'password',
        validation: {
            validationType: ValidationType.CONFIRMATION,
            fieldNameToConfirm: 'password',
            helperText: 'Passwords must match',
        },
    } as FormField,
};