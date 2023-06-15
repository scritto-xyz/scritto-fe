import { Box, TextField } from "@suid/material";

export default function BasicTextField({fieldLabel}) {
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
            <TextField fullWidth={ true } id="standard-basic" label={ fieldLabel } variant="standard"/>
        </Box>
    );
}
