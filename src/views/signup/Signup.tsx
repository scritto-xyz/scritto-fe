import './index.scss';
import ScrittoForm from "../../components/common/form/ScrittoForm";
import { createSignal, For } from "solid-js";
import { FormField, FormFieldEntries } from "../../util/FormValidation";
import { SignupRequest } from "../../model/auth/Signup";
import BasicTextField from "../../components/common/TextField";
import { OAuthIcons } from "../../components/common/OAuthIcons";
import { ArrowInCircle } from "../../components/arrowInCircle/ArrowInCircle";

const Signup = () => {
    const [signupRequest, setSignupRequest] = createSignal<SignupRequest>(undefined);
    const [formFields, setFormFields] = createSignal<FormFieldEntries>({
        'first_name': {
            name: 'email',
            label: 'First Name',
            required: true,
            setter: setSignupRequest,
        } as FormField,
        'last_name': {
            name: 'last_name',
            label: 'Last Name',
            required: true,
            setter: setSignupRequest,
        } as FormField,
        'username': {
            name: 'username',
            label: 'Username',
            required: true,
            setter: setSignupRequest,
        } as FormField,
        'email': {
            name: 'email',
            label: 'Email',
            required: true,
            setter: setSignupRequest,
            isEmail: true,
        } as FormField,
        'country': {
            name: 'country',
            label: 'Country',
            required: true,
            setter: setSignupRequest,
        } as FormField,
        'state': {
            name: 'state',
            label: 'State',
            required: true,
            setter: setSignupRequest,
        } as FormField,
        'city': {
            name: 'city',
            label: 'City',
            required: true,
            setter: setSignupRequest,
        } as FormField,
        'user_type': {
            name: 'user_type',
            label: 'User Type',
            required: true,
            setter: setSignupRequest,
        } as FormField,
        'password': {
            name: 'password',
            label: 'Password',
            required: true,
            setter: setSignupRequest,
            type: 'password',
        } as FormField,
    });
    return (
        <div class="signup-container">
            <h1 class="text-3xl"><strong>Hello</strong>, Set up<br/>your account :)</h1>
            <ScrittoForm>
                <For each={ Object.values(formFields()) }>
                    { (field: FormField) => (
                        <BasicTextField
                            formFieldEntries={ formFields }
                            fieldName={ field.name }
                        />
                    ) }
                </For>
                <div class="mt-8">
                    <OAuthIcons/>
                </div>
                <ArrowInCircle onClick={ () => {
                } } margin="2rem 0 -3.75rem 0"/>
            </ScrittoForm>
        </div>
    );
};

export default Signup;