import { FormField, ValidationType } from "../interface/FormField";
import { FormFieldEntries } from "../interface/FormFieldEntries";

export const SIGNUP_FORM: FormFieldEntries = {
    'firstName': {
        name: 'firstName',
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
    'userType': {
        name: 'userType',
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