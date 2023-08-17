import { Box, TextField } from "@suid/material";
import { Accessor, createEffect, createSignal } from "solid-js";
import { FormFieldEntries } from "../../util/FormValidation";

export interface BasicTextFieldProps {
    readonly formFieldEntries: Accessor<FormFieldEntries>;
    readonly fieldName: string;
}

export default function BasicTextField(props: BasicTextFieldProps) {
    const formField = props.formFieldEntries()[props.fieldName];
    const { name, required, type, setter, label } = formField;
    const [invalidFieldStyle, setInvalidFieldStyle] = createSignal();
    const changeHandler = (e: Event) => {
        const inputTarget = e.target as HTMLInputElement;
        const { name, value } = inputTarget;

        setter(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    };

    createEffect(() => {
        // reinitializing because you must call signal accessor from inside createEffect
        // in order for it to be reactive
        const isError = props.formFieldEntries()[props.fieldName].error;
        if (isError) {
            const invalidStyle = { color: 'red', borderBottom: 'solid 1px red' };
            setInvalidFieldStyle(invalidStyle);
        } else {
            setInvalidFieldStyle(null);
        }
    });

    return (
        <Box
            component="form"
            sx={ {
                "& > :not(style)": { m: 1, maxWidth: "50ch" },
                textAlign: "center",
            } }
            noValidate
            autocomplete="off"
        >
            <TextField sx={ invalidFieldStyle() } inputProps={ {
                name: name,
                onChange: changeHandler,
                type: type ?? 'text',
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
