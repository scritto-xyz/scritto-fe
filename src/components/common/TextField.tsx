import { Box, TextField } from "@suid/material";
import { Accessor, createEffect, createSignal } from "solid-js";

export interface BasicTextFieldProps {
    readonly fieldLabel: string;
    readonly name: string;
    readonly type?: string;
    required?: boolean;
    readonly isInvalidInput?: Accessor<boolean>;
    readonly setter: (prev: any) => void;
}

export default function BasicTextField(props: BasicTextFieldProps) {
    const required = props.required ?? true;
    const [invalidFieldStyle, setInvalidFieldStyle] = createSignal();
    const changeHandler = (e: Event) => {
        const inputTarget = e.target as HTMLInputElement;
        const { name, value } = inputTarget;

        props.setter(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    };

    createEffect(() => {
        if (props.isInvalidInput !== undefined && props.isInvalidInput() !== null) {
            setInvalidFieldStyle(props.isInvalidInput() ? { color: 'red', borderBottom: 'solid 1px red' } : {});
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
                name: props.name,
                onChange: changeHandler,
                type: props.type ?? 'text',
            } }
                       fullWidth={ true }
                       id={ `standard-basic-${ props.name }` }
                       label={ props.fieldLabel }
                       variant="standard"
                       required={ required }
            />
        </Box>
    );
}
