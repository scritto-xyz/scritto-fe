import { Accessor, For, Setter } from "solid-js";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import BasicTextField from "./TextField";


interface TextFieldGroupProps {
    setter: Setter<any>;
    formFieldEntries: Accessor<FormFieldEntries>;
}

export function TextFieldGroup(props: TextFieldGroupProps) {
    return (
        <For each={ Object.keys(props.formFieldEntries()) }>
            { (fieldName: string) => (
                <BasicTextField setter={ props.setter } formFieldEntries={ props.formFieldEntries }
                                fieldName={ fieldName }/>
            ) }
        </For>
    );
}