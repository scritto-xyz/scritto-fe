import { FormField, ValidationType } from "../interface/FormField";

export const SIGNUP_FORM = {
    'first_name': {
        name: 'email',
        label: 'First Name',
        required: true,
    } as FormField,
    'last_name': {
        name: 'last_name',
        label: 'Last Name',
        required: true,
    } as FormField,
    'username': {
        name: 'username',
        label: 'Username',
        required: true,
    } as FormField,
    'email': {
        name: 'email',
        label: 'Email',
        required: true,
        validation: {
            validationType: ValidationType.EMAIL,
        },
    } as FormField,
    'country': {
        name: 'country',
        label: 'Country',
        required: true,
    } as FormField,
    'state': {
        name: 'state',
        label: 'State',
        required: true,
    } as FormField,
    'city': {
        name: 'city',
        label: 'City',
        required: true,
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