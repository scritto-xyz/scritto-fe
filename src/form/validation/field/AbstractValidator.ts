import { FormField, Validation } from "../../interface/FormField";


export abstract class AbstractValidator {
    protected constructor(protected formValues: any, protected formField: FormField) {
        this.formValues = formValues;
        this.formField = formField;
    }

    abstract fieldIsValid(): Validation;

    protected valueIsPresent(): boolean {
        const { name, required } = this.formField;
        if (!required) {
            return true;
        }

        const value = this.formValues[name];
        if (value === undefined || value === null) {
            return false;
        }

        const isEmptyString = typeof value === "string" && value === "";
        return !isEmptyString && this.formValues && Object.keys(this.formValues).includes(this.formField.name);
    }
}