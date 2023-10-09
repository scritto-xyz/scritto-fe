import { Box, FormControl, InputLabel, MenuItem, Select } from "@suid/material";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import { Accessor, createEffect, createSignal, For, Setter } from "solid-js";
import { FormField } from "../../form/interface/FormField";

export interface SelectOption {
    readonly label: string;
    readonly value: string;
}

export interface SelectProps {
    readonly formFieldEntries: Accessor<FormFieldEntries>;
    readonly fieldName: string;
    readonly setter: Setter<any>;
    readonly options: Array<SelectOption>;
}

export const SelectField = (props: SelectProps) => {
    const { formFieldEntries, fieldName, setter, options } = props;
    const [formField, setFormField] = createSignal<FormField>(formFieldEntries()[fieldName]);

    createEffect(() => {
        const currentFormField = formFieldEntries()[fieldName];
        setFormField(currentFormField);
    });

    const changeHandler = (e: Event) => {
        const inputTarget = e.target as HTMLInputElement;
        const { name, value } = inputTarget;

        setter(prev => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value: value,
                },
            };
        });
    };

    return (

        <Box
            sx={ {
                "& > :not(style)": { m: '14px 0' },
                textAlign: "center",
                width: '100%',
            } }
        >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                <Select
                    name={ formField().name }
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ formField().value }
                    label={ formField().label }
                    onChange={ changeHandler }
                >
                    <For each={ options }>
                        { (option) => (<MenuItem value={ option.value }>{ option.label }</MenuItem>) }
                    </For>
                </Select>
            </FormControl>
        </Box>
    );
};