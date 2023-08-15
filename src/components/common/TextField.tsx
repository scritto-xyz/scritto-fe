import { Box, TextField } from "@suid/material";
import { Accessor, createEffect, createSignal } from "solid-js";
import { FormField, FormFieldEntries } from "../../util/FormValidation";

export interface BasicTextFieldProps {
    readonly formField: FormField;
    readonly errors?: Accessor<FormFieldEntries>;
}

export default function BasicTextField(props: BasicTextFieldProps) {
    const { name, required, type, setter, label } = props.formField;
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
        if (props.errors !== undefined && props.errors() && props.errors()[name]) {
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
