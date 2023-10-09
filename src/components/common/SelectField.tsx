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
    const [textFieldStyle, setTextFieldStyle] = createSignal<string>();

    createEffect(() => {
        const currentFormField = formFieldEntries()[fieldName];
        setFormField(currentFormField);
    });

    const changeHandler = (e: Event, fieldName: string) => {
        const inputTarget = e.target as HTMLSelectElement;
        const { value } = inputTarget;

        console.log('name: ', fieldName);
        console.log('value: ', value);
        setter(prev => {
            return {
                ...prev,
                [fieldName]: {
                    ...prev[fieldName],
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
            const invalidStyle = "color: red; border: solid 1px red; borderBottom: solid 1px red";
            setTextFieldStyle(invalidStyle);
        } else {
            setTextFieldStyle(null);
        }
    });

    // @ts-ignore
    // @ts-ignore
    return (

        <Box
            sx={ {
                "& > :not(style)": { m: '30px 0 14px 0 ' },
                textAlign: "center",
                width: '50%',
            } }
        >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User
                    Type</InputLabel>
                <Select
                    style={ textFieldStyle() }
                    labelId={ formField().name }
                    id={ formField().name }
                    value={ formField().value }
                    label={ formField().label }
                    onChange={ (e) => changeHandler(e, formField().name) }
                >
                    <For each={ options }>
                        { (option) => (<MenuItem value={ option.value }>{ option.label }</MenuItem>) }
                    </For>
                </Select>
            </FormControl>
        </Box>
    );
};