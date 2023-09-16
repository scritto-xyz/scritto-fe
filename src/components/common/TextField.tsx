import { Box, TextField } from "@suid/material";
import {Accessor, createEffect, createSignal, Setter, Show} from "solid-js";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import {PasswordValidationFeedback} from "../../form/interface/FormField";

export interface BasicTextFieldProps {
    readonly formFieldEntries: Accessor<FormFieldEntries>;
    readonly fieldName: string;
    readonly setter: Setter<any>;
}

export default function BasicTextField(props: BasicTextFieldProps) {
    const formField = props.formFieldEntries()[props.fieldName];
    const { name, required, type, label, validation } = formField;
    const [textFieldStyle, setTextFieldStyle] = createSignal<Object>();
    const changeHandler = (e: Event) => {
        const inputTarget = e.target as HTMLInputElement;
        const { name, value } = inputTarget;

        props.setter(prev => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value: value,
                },
            };
        });
    };

    createEffect(() => {
        // reinitializing because you must call signal accessor from inside createEffect
        // in order for it to be reactive
        const isError = props.formFieldEntries()[props.fieldName].validation?.error;
        if (isError) {
            const invalidStyle = { color: 'red', borderBottom: 'solid 1px red' };
            setTextFieldStyle(invalidStyle);
        } else {
            setTextFieldStyle(null);
        }
    });

    return (
        <Box
            sx={ {
                "& > :not(style)": { m: '14px 0' },
                textAlign: "center"
            } }
        >
            <TextField
                sx={ textFieldStyle() } inputProps={ {
                name: name,
                onChange: changeHandler,
                type: type ?? 'text'
            } }
                fullWidth={ true }
                id={ `standard-basic-${ name }` }
                label={ label }
                variant="standard"
                required={ required }
            />
            <Show when={props.formFieldEntries()[props.fieldName].validation?.passwordValidationFeedback != null}>
                <ValidationFeedback formFieldEntries={props.formFieldEntries} fieldName={props.fieldName} />
            </Show>
        </Box>
    );
}

interface FeedbackProps {
    readonly formFieldEntries: Accessor<FormFieldEntries>;
    readonly fieldName: string;
}

const ValidationFeedback = (props: FeedbackProps) => {
    const validationFeedback = props.formFieldEntries()[props.fieldName].validation?.passwordValidationFeedback;
    const good = { color: 'green', 'text-align': 'left' };
    const bad = { color: 'red', 'text-align': 'left' };
    const neutral = { color: 'black', 'text-align': 'left' };
    const [hasMinLength, setHasMinLength] = createSignal<boolean>(validationFeedback.hasMinLength);
    const [containsLetter, setContainsLetter] = createSignal<boolean>(validationFeedback.containsLetter);
    const [containsNumber, setContainsNumber] = createSignal<boolean>(validationFeedback.containsNumber);

    createEffect(() => {
        const validationFeedback = props.formFieldEntries()[props.fieldName].validation?.passwordValidationFeedback;
        setHasMinLength(validationFeedback.hasMinLength);
        setContainsLetter(validationFeedback.containsLetter);
        setContainsNumber(validationFeedback.containsNumber);
    });
    function getStyle(isGood: boolean) {
        if(isGood === null) {
            return neutral;
        }
        return isGood ? good : bad;
    }

    return (
        <ul style={{'list-style-type': 'circle', "font-size": '0.8rem', "padding-left": '16px'}}>
            <li style={getStyle(hasMinLength())}>Has 8 characters</li>
            <li style={getStyle(containsLetter())}>Contains at least one letter</li>
            <li style={getStyle(containsNumber())}>Contains at least one number</li>
        </ul>
    );
}
