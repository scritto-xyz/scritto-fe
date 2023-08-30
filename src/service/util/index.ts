import { FormFieldEntries } from "../../form/interface/FormFieldEntries";

export function mapFormFieldsToModel<T>(formFields: FormFieldEntries): T {
    const mappedModel: any = {} as T;
    Object.values(formFields).forEach(formField => {
        const { name, value } = formField;
        mappedModel[name] = value;
    });
    return mappedModel;
}