import './index.scss';
import ScrittoForm from "../../components/common/form/ScrittoForm";
import { createSignal } from "solid-js";
import { validateForm } from "../../form/FormValidation";
import { SignupResponse } from "../../model/auth/Signup";
import { OAuthIcons } from "../../components/common/OAuthIcons";
import { ArrowInCircle } from "../../components/arrowInCircle/ArrowInCircle";
import { toast } from "solid-toast";
import { signup } from "../../service/scritto/Auth";
import { useNavigate } from "@solidjs/router";
import { FormFieldEntries } from "../../form/interface/FormFieldEntries";
import { FormField, ValidationType } from "../../form/interface/FormField";
import { TextFieldGroup } from "../../components/common/TextFieldGroup";

const Signup = () => {
    const [isLoading, setIsLoading] = createSignal<boolean>(false);
    const [formFields, setFormFields] = createSignal<FormFieldEntries>({
        'first_name': {
            name: 'email',
            label: 'First Name',
            required: true,
        } as FormField,
        'last_name': {
            name: 'last_name',
            label: 'Last Name',
            required: true,
        } as FormField,
        'username': {
            name: 'username',
            label: 'Username',
            required: true,
        } as FormField,
        'email': {
            name: 'email',
            label: 'Email',
            required: true,
            validation: {
                validationType: ValidationType.EMAIL,
            },
        } as FormField,
        'country': {
            name: 'country',
            label: 'Country',
            required: true,
        } as FormField,
        'state': {
            name: 'state',
            label: 'State',
            required: true,
        } as FormField,
        'city': {
            name: 'city',
            label: 'City',
            required: true,
        } as FormField,
        'user_type': {
            name: 'user_type',
            label: 'User Type',
            required: true,
        } as FormField,
        'password': {
            name: 'password',
            label: 'Password',
            required: true,
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
        try {
            const { validatedEntries, isError } = validateForm(formFields());
            if (isError) {
                toast.error('Please fill all the required fields correctly');
                setFormFields(validatedEntries);
                return;
            }

            const response: SignupResponse = await signup(formFields());
            navigate('/home', { replace: true, state: { user: response } });
        } catch (exception: any) {
            console.log(exception);
            toast.error('Something went wrong, please try again later');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div class="signup-container">
            <h1 class="text-3xl"><strong>Hello</strong>, set up<br/>your account :)</h1>
            <ScrittoForm>
                <TextFieldGroup setter={ setFormFields } formFieldEntries={ formFields }
                                fieldNames={ Object.keys(formFields()) }/>
                <div class="mt-8">
                    <OAuthIcons/>
                </div>
                <ArrowInCircle onClick={ handleSignup } margin="2rem 0 -3.75rem 0"/>
            </ScrittoForm>
        </div>
    );
};

export default Signup;