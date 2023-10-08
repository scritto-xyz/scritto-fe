import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import { ValidationType } from "../../form/interface/FormField";

export function mapFormFieldsToModel<T>(formFields: FormFieldEntries): T {
    const mappedModel: any = {} as T;
    Object.values(formFields).forEach(formField => {
        if (formField.validation?.validationType === ValidationType.CONFIRMATION) {
            return;
        }

        const { name, value } = formField;
        mappedModel[name] = value;
    });
    return mappedModel;
}