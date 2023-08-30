import { FormField, ValidationType } from "../interface/FormField";

export const LOGIN_FORM = {
    'email': {
        name: 'email',
        label: 'Email',
        required: true,
        validation: {
            validationType: ValidationType.EMAIL,
        },
    } as FormField,
    'password': {
        name: 'password',
        label: 'Password',
        type: 'password',
        required: true,
    } as FormField,
};