import {Box, TextField} from "@suid/material";
import {Accessor, createEffect, createSignal, Setter, Show} from "solid-js";
import {FormFieldEntries} from "../../form/interface/FormFieldEntries";
import {PasswordValidationFeedback} from "../../form/interface/FormField";

export interface BasicTextFieldProps {
    readonly formFieldEntries: Accessor<FormFieldEntries>;
    readonly fieldName: string;
    readonly setter: Setter<any>;
}

export default function BasicTextField(props: BasicTextFieldProps) {
    const formField = props.formFieldEntries()[props.fieldName];
    const {name, required, type, label} = formField;
    const [textFieldStyle, setTextFieldStyle] = createSignal<Object>();
    const [validationFeedback, setValidationFeedback] = createSignal<PasswordValidationFeedback>(formField.validation?.passwordValidationFeedback);
    const changeHandler = (e: Event) => {
        const inputTarget = e.target as HTMLInputElement;
        const {name, value} = inputTarget;

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
            const invalidStyle = {color: 'red', borderBottom: 'solid 1px red'};
            setTextFieldStyle(invalidStyle);
        } else {
            setTextFieldStyle(null);
        }
    });

    createEffect(() => {
        const validationFeedback = props.formFieldEntries()[props.fieldName].validation?.passwordValidationFeedback;
        setValidationFeedback(validationFeedback);
    });

    return (
        <Box
            sx={{
                "& > :not(style)": {m: '14px 0'},
                textAlign: "center"
            }}
        >
            <TextField
                sx={textFieldStyle()} inputProps={{
                name: name,
                onChange: changeHandler,
                type: type ?? 'text'
            }}
                fullWidth={true}
                id={`standard-basic-${name}`}
                label={label}
                variant="standard"
                required={required}
            />
            <Show when={validationFeedback() != null}>
                <ValidationFeedback validationFeedback={validationFeedback}/>
            </Show>
        </Box>
    );
}

interface FeedbackProps {
    readonly validationFeedback: Accessor<PasswordValidationFeedback>;
}

const ValidationFeedback = (props: FeedbackProps) => {
    const good = {color: 'green', 'text-align': 'left'};
    const bad = {color: 'red', 'text-align': 'left'};
    const neutral = {color: 'black', 'text-align': 'left'};
    const [feedback, setFeedback] = createSignal<PasswordValidationFeedback>(props.validationFeedback());

    createEffect(() => {
        const validationFeedback = props.validationFeedback();
        setFeedback(validationFeedback);
    });

    function getStyle(isGood: boolean) {
        if (isGood === null) {
            return neutral;
        }
        return isGood ? good : bad;
    }

    return (
        <ul style={{
            'list-style-type': 'circle',
            "font-size": '0.8rem',
            "padding-left": '16px',
            "margin": '0',
        }}>
            {/* @ts-ignore */}
            <li style={getStyle(feedback().hasMinLength)}>Has 8 characters</li>
            {/* @ts-ignore */}
            <li style={getStyle(feedback().containsLetter)}>Has at least one letter</li>
            {/* @ts-ignore */}
            <li style={getStyle(feedback().containsNumber)}>Has at least one number</li>
        </ul>
    );
}
