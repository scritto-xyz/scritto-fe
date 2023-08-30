import './index.scss';
import { Box } from "@suid/material";
import "./index.scss";

const ScrittoForm = (props) => {
    return (
        <Box
            class="scritto-form-container"
            component="form"
            noValidate
            autocomplete="off"
            sx={ { width: '100%' } }
        >
            <div class="scritto-form">
                { props.children }
            </div>
        </Box>
    );
};

export default ScrittoForm;