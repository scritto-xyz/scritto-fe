import { FormField, ValidationType } from "../interface/FormField";
import { FormFieldEntries } from "../interface/FormFieldEntries";

export const LOGIN_FORM: FormFieldEntries = {
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