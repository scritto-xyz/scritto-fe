import './index.scss';
import ScrittoForm from "../../components/common/form/ScrittoForm";
import { createSignal, For } from "solid-js";
import { validateForm } from "../../form/FormValidation";
import { SignupRequest, SignupResponse } from "../../model/auth/Signup";
import BasicTextField from "../../components/common/TextField";
import { OAuthIcons } from "../../components/common/OAuthIcons";
import { ArrowInCircle } from "../../components/arrowInCircle/ArrowInCircle";
import { toast } from "solid-toast";
import { signup } from "../../service/scritto/Auth";
import { useNavigate } from "@solidjs/router";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import { FormField, ValidationType } from "../../form/interface/FormField";

const Signup = () => {
    const [isLoading, setIsLoading] = createSignal<boolean>(false);
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
            validation: {
                validationType: ValidationType.EMAIL,
            },
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
            validation: {
                validationType: ValidationType.PASSWORD,
                helperText: 'Password must be at least 8 characters long and contain at least one number and one special character',
            },
        } as FormField,
        'passwordConfirmation': {
            name: 'passwordConfirmation',
            label: 'Confirm Password',
            required: true,
            setter: setSignupRequest,
            type: 'password',
            validation: {
                validationType: ValidationType.CONFIRMATION,
                fieldNameToConfirm: 'password',
                helperText: 'Passwords must match',
            },
        } as FormField,
    });
    const navigate = useNavigate();

    const handleSignup = async () => {
        setIsLoading(true);
        const { adjustedEntries, isError } = validateForm(signupRequest(), formFields());
        if (isError) {
            toast.error('Please fill all the required fields correctly');
            setFormFields(adjustedEntries);
            setIsLoading(false);
            return;
        }

        const response: SignupResponse = await signup(signupRequest());
        setIsLoading(false);
        if (!response) {
            return;
        }
        navigate('/home');
    };

    return (
        <div class="signup-container">
            <h1 class="text-3xl"><strong>Hello</strong>, set up<br/>your account :)</h1>
            <ScrittoForm>
                <For each={ Object.values(formFields()) }>
                    { (field: FormField) => (
                        <BasicTextField
                            setter={ setFormFields }
                            formFieldEntries={ formFields }
                            fieldName={ field.name }
                        />
                    ) }
                </For>
                <div class="mt-8">
                    <OAuthIcons/>
                </div>
                <ArrowInCircle onClick={ handleSignup } margin="2rem 0 -3.75rem 0"/>
            </ScrittoForm>
        </div>
    );
};

export default Signup;