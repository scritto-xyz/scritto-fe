import { FormField, Validation } from "../../interface/FormField";


export abstract class AbstractValidator {
    protected constructor(protected formField: FormField) {
        this.formField = formField;
    }

    abstract fieldIsValid(): Validation;

    protected valueIsPresent(): boolean {
        const { value, required } = this.formField;
        if (!required) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        const isEmptyString = typeof value === "string" && value === "";
        return !isEmptyString;
    }
}