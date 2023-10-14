import './index.scss';
import { Box } from "@suid/material";
import "./index.scss";
import { JSX } from "solid-js";

interface ScrittoFormProps {
    readonly children: JSX.Element;
    onSubmit: () => void;
}

const ScrittoForm = (props: ScrittoFormProps) => {
    return (
        <Box
            class="scritto-form-container"
            component="form"
            noValidate
            autocomplete="off"
            sx={ { width: '100%' } }
        >
            <form class="scritto-form">
                { props.children }
            </form>
        </Box>
    );
};

export default ScrittoForm;