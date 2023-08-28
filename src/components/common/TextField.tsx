import { Box, TextField } from "@suid/material";
import { Accessor, createEffect, createSignal, Setter } from "solid-js";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";

export interface BasicTextFieldProps {
    readonly formFieldEntries: Accessor<FormFieldEntries>;
    readonly fieldName: string;
    readonly setter: Setter<any>;
}

export default function BasicTextField(props: BasicTextFieldProps) {
    const formField = props.formFieldEntries()[props.fieldName];
    const { name, required, type, label } = formField;
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
        </Box>
    );
}
