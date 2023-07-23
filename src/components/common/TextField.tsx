import { Box, TextField } from "@suid/material";

export interface BasicTextFieldProps {
    fieldLabel: string;
    name: string;
    onChange: (e: Event) => void;
}

export default function BasicTextField(props: BasicTextFieldProps) {
    return (
        <Box
            component="form"
            sx={ {
                "& > :not(style)": {m: 1, maxWidth: "50ch"},
                textAlign: "center",
            } }
            noValidate
            autocomplete="off"
        >
            <TextField inputProps={ {name: props.name, onChange: props.onChange} }
                       fullWidth={ true } id="standard-basic"
                       label={ props.fieldLabel }
                       variant="standard"/>
        </Box>
    );
}
