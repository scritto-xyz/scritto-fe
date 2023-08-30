import { Accessor, For, Setter } from "solid-js";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import BasicTextField from "./TextField";


interface TextFieldGroupProps {
    setter: Setter<any>;
    formFieldEntries: Accessor<FormFieldEntries>;
    fieldNames: string[];
}

export function TextFieldGroup(props: TextFieldGroupProps) {
    return (
        <For each={ props.fieldNames }>
            { (fieldName: string) => (
                <BasicTextField setter={ props.setter } formFieldEntries={ props.formFieldEntries }
                                fieldName={ fieldName }/>
            ) }
        </For>
    );
}