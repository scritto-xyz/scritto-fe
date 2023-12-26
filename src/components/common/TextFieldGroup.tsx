import {Accessor, For, Setter} from "solid-js";
import {FormFieldEntries} from "../../form/interface/FormFieldEntries";
import BasicTextField from "./TextField";
import {SelectField} from "./SelectField";


interface TextFieldGroupProps {
    setter: Setter<any>;
    formFieldEntries: Accessor<FormFieldEntries>;
}

export function TextFieldGroup(props: TextFieldGroupProps) {
    return (
        <For each={Object.entries(props.formFieldEntries())}>
            {([fieldName, formField]) => {
                const inputType = formField.htmlType;
                switch (inputType) {
                    case 'select':
                        const {selectOptions} = formField;
                        return <SelectField setter={props.setter} formFieldEntries={props.formFieldEntries}
                                            fieldName={fieldName} options={selectOptions}/>;
                    default:
                        return <BasicTextField setter={props.setter} formFieldEntries={props.formFieldEntries}
                                               fieldName={fieldName}/>;
                }
            }}
        </For>
    );
}