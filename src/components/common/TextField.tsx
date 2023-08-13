import { Box, TextField } from "@suid/material";

export interface BasicTextFieldProps {
    fieldLabel: string;
    name: string;
    type?: string;
    setter: (prev: any) => void;
}

export default function BasicTextField(props: BasicTextFieldProps) {
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
            <TextField inputProps={ { name: props.name, onChange: changeHandler, type: props.type ?? 'text' } }
                       fullWidth={ true } id="standard-basic"
                       label={ props.fieldLabel }
                       variant="standard"/>
        </Box>
    );
}
